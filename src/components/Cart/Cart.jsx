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
        </div>
      )
    }) 
    return (

    <div>
     <p>{mapCart}</p>
     <p>{this.props.totalCart}</p>
    </div>
    )
  }
}
