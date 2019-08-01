import React, { Component } from 'react';
import { connect } from 'react-redux';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// Components
import SideBar from './components/sidebar';
import Cart from './containers/cart';
import ProductList from './containers/product-list';

// CSS
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title"><Link to="/TM-Redux-task/products" className="App-title">My simple shop</Link></h1>
            <div className='App-header-cart-section'>
              <Link to="/TM-Redux-task/cart">
                <img className='cart-image' src='https://icon2.kisspng.com/20180320/dvq/kisspng-shopping-cart-computer-icons-white-cart-png-simple-5ab15d02e7c8b8.7488579515215731229494.jpg' alt='Cart' />
              </Link>
              <div className='cart-count'>{this.props.inCart.length}</div>
            </div>
          </header>
          <div className="App-wrapper">
            <SideBar />
            <Route path="/TM-Redux-task/products" component={ProductList} />
            <Route path="/TM-Redux-task/cart" component={Cart} />
          </div>
        </div>
      </Router>
    );
  }
}
const mapStateToProps = state => ({ inCart: state.cart.inCart })

export default connect(mapStateToProps)(App);
