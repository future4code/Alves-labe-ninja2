import React, { Component } from 'react'
import HomeScreen from './components/HomeScreen/HomeScreen'
import RegistrationScreen from './components/RegistrationScreen/RegistrationScreen'
import ContractingScreen from './components/ContractingScreen/ContractingScreen'
import DetailsScreen from './components/DetailsScreen/DetailsScreen'
import CardScreen from './components/CardScreen/CardScreen'
import Header from './components/Header/Header'

export default class App extends Component {
  state = {
    currentScreen: "registration"
  }

  selectScreen = () => {
    switch (this.state.currentScreen) {
      case "home":
        return <HomeScreen />
      case "registration":
        return <RegistrationScreen />
      case "contracting":
        return <ContractingScreen />
      case "details":
        return <DetailsScreen />
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
    this.setState({ currentScreen: "contracting" })
  }

  goToDetails = () => {
    this.setState({ currentScreen: "details" })
  }

  goToCard = () => {
    this.setState({ currentScreen: "card" })
  }

  render() {
    return (
      <div>
        <Header goToHome={this.goToHome} goToCard={this.goToCard} />
        {this.selectScreen()}
      </div>
    )
  }
}
