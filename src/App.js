import React, { Component } from 'react'
import HomeScreen from './components/HomeScreen/HomeScreen'
import RegistrationScreen from './components/RegistrationScreen/RegistrationScreen'
import ContractingScreen from './components/ContractingScreen/ContractingScreen'
import DetailsScreen from './components/DetailsScreen/DetailsScreen'
import CardScreen from './components/CardScreen/CardScreen'
import Header from './components/Header/Header'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class App extends Component {
  state = {
    currentScreen: "home",
    clickedJobId: ""
  }

  selectScreen = () => {
    switch (this.state.currentScreen) {
      case "home":
        return <HomeScreen goToRegistration={this.goToRegistration} goToContracting={this.goToContracting} />
      case "registration":
        return <RegistrationScreen />
      case "contracting":
        return <ContractingScreen goToDetails={this.goToDetails} />
      case "details":
        return <DetailsScreen goToContracting={this.goToContracting} jobId={this.state.clickedJobId}/>
      case "card":
        return <CardScreen />
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
    this.setState({ currentScreen: "contracting", clickedJobId: ""})
  }

  goToDetails = (jobId) => {
    this.setState({ currentScreen: "details", clickedJobId: jobId})
  }

  goToCard = () => {
    this.setState({ currentScreen: "card" })
  }

  render() {
    return (
      <div>
        <ToastContainer />
        <Header goToHome={this.goToHome} goToCard={this.goToCard} />
        {this.selectScreen()}
      </div>
    )
  }
}
