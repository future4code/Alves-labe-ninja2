import React, { Component } from 'react'
import ServiceCard from '../ServiceCard/ServiceCard'
import axios from "axios"

export default class ContractingScreen extends Component {
  render() {
    return (
      <div>
        <p>ContractingScreen</p>
        <ServiceCard />
      </div>
    )
  }
}
