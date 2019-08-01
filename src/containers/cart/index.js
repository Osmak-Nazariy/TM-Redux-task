import React, { Component } from 'react';
import { connect } from 'react-redux';

import './cart.css';

import {onOrderCountChange, removeFromCart} from '../../actions/cart.actions'

export class Cart extends Component {

  renderCartItems() {
    return (
      this.props.cart.inCart.map((i, index) => (
        <div className="product_list_item" key={index}>
          <p>{i.name}</p>
          <p>Price: {i.price}</p>
          <p>{`Items available: ${i.available}`}</p>
          <input className='orderCount' type='number' min='1' max={i.available} value={i.orderCount} onChange={(event) => this.props.onOrderCountChange(event.target.value, i)}></input>
          <button onClick={()=> this.props.removeFromCart(index)}>Remove from cart</button>
          <p>Total: {i.price * i.orderCount}</p>
        </div>
      ))
    )
  }

  render() {
    return (<div className="App-cart">
      {this.props.inCart.length ? this.renderCartItems() : 'Your cart is empty :('}
    </div>);
  }
}

const mapStateToProps = state => ({ ...state, inCart: state.cart.inCart });
const mapDispatchToProps = dispatch => ({
  onOrderCountChange: (orderCount, item) => dispatch(onOrderCountChange(orderCount, item)),
  removeFromCart : (id) => dispatch(removeFromCart(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
