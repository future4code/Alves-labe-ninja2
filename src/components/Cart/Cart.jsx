import React, { Component } from 'react'


export default class Cart extends Component {
  render() {
  const mapCart = this.props.idItemsCart.map((job) => {
      return (
        <div>
          <p>
            {job.title}
            {job.price}
            
          </p>
          <button onClick={() => {this.props.removeJob(job)}}> X</button>
        </div>
      )
    }) 
    return (

    <div>
     <p>{mapCart}</p>
     <p>{this.props.totalCart}</p>
     <button onClick={() => this.props.finallyShopping()}>FInalizar COmpra</button>
    </div>
    )
  }
}
