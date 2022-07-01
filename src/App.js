import React, { Component } from 'react'
import HomeScreen from './components/HomeScreen/HomeScreen'
import RegistrationScreen from './components/RegistrationScreen/RegistrationScreen'
import ContractingScreen from './components/ContractingScreen/ContractingScreen'
import DetailsScreen from './components/DetailsScreen/DetailsScreen'
import Header from './components/Header/Header'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Cart from './components/Cart/Cart';
import axios from 'axios'
import { BASE_URL, headers } from './constants/credentials'

export default class App extends Component {
  state = {
    list: [],
    currentScreen: "home",
    clickedJobId: "",
    // IdItemsCart: []
   }


  selectScreen = () => {
    switch (this.state.currentScreen) {
      case "home":
        return <HomeScreen goToRegistration={this.goToRegistration} goToContracting={this.goToContracting} goToCard={this.goToCard}/>
      case "registration":
        return <RegistrationScreen />
      case "contracting":
        return <ContractingScreen goToDetails={this.goToDetails} clickAddJob={this.clickAddJob} getAllJobs={this.getAllJobs} list={this.state.list}/>
      case "details":
        return <DetailsScreen goToContracting={this.goToContracting} jobId={this.state.clickedJobId} />
      case "Card" :
        return <Cart clickAddJob={this.clickAddJob} /> 
      default:
        return <div>Erro! Página não encontrada!</div>
    }
  }

  goToHome = () => {
    this.setState({ currentScreen: "home" })
  }

  goToRegistration = () => {
    this.setState({ currentScreen: "registration" })
  }

  goToContracting = () => {
    this.setState({ currentScreen: "contracting", clickedJobId: "" })
  }

  goToDetails = (jobId) => {
    this.setState({ currentScreen: "details", clickedJobId: jobId })
  }

  goToCard = (jobId) => {
    this.setState({ currentScreen: "card", clickedJobId: jobId })
  }

  getAllJobs = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/jobs`, headers)
      this.setState({ list: res.data.jobs })
      // this.setState({ removeLoading: true })
      console.log(this.state.list)
    }
    catch (error) {
      console.log(error.response.data.message)
    }
  }


  // clickAddJob = async (jobId) => {
  //   const body = {"taken": true}

  //   try {
  //     const res = await axios.post(`${BASE_URL}/jobs/${jobId}`, body, headers)
  //   }
  // }

  render() {
    return (
      <div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Header goToHome={this.goToHome} goToCard={this.goToCard} />
        {this.selectScreen()}
      </div>
    )
  }
}
