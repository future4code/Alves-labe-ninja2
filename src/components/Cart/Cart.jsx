import React, { Component } from 'react'

export default class Cart extends Component {
  render() {
    console.log(this.props.idItemsCart)
  const mapCart = this.props.idItemsCart.map((job) => {
      console.log(this.props.idItemsCart)
      return (
        <div>
          <p>
            {job.title}
          </p>
        </div>
      )
    }) 
    return (

    <div>
      <p>coisarada</p>
     <p>{mapCart}</p>
    </div>
    )
  }
}
