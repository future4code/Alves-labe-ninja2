import React, { Component } from 'react'
import HomeScreen from './components/HomeScreen/HomeScreen'
import RegistrationScreen from './components/RegistrationScreen/RegistrationScreen'
import ContractingScreen from './components/ContractingScreen/ContractingScreen'
import DetailsScreen from './components/DetailsScreen/DetailsScreen'
import Header from './components/Header/Header'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Cart from './components/Cart/Cart';

export default class App extends Component {
  state = {
    currentScreen: "home",
    clickedJobId: "",
    idItemsCart: [],
    totalCart: 0
  }


  selectScreen = () => {
    switch (this.state.currentScreen) {
      case "home":
        return <HomeScreen goToRegistration={this.goToRegistration} goToContracting={this.goToContracting} goToCard={this.goToCard} />
      case "registration":
        return <RegistrationScreen />
      case "contracting":
        return <ContractingScreen goToDetails={this.goToDetails} clickAddJob={this.clickAddJob} />
      case "details":
        return <DetailsScreen goToContracting={this.goToContracting} jobId={this.state.clickedJobId} clickAddJob={this.clickAddJob} />
      case "Cart":
        return <Cart clickAddJob={this.clickAddJob} idItemsCart={this.state.idItemsCart} totalCart={this.state.totalCart} />
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
    this.setState({ currentScreen: "Cart", clickedJobId: jobId })
  }

  clickAddJob = (jobId) => {
    this.setState({ idItemsCart: [...this.state.idItemsCart, jobId] })
    this.setState({ totalCart: this.state.totalCart + jobId.price })
  }

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
        <Header idItemsCart={this.state.idItemsCart} goToHome={this.goToHome} goToCard={this.goToCard} />
        {this.selectScreen()}
      </div>
    )
  }
}
