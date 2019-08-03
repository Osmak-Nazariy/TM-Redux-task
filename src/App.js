import React, { Component } from 'react';
import { connect } from 'react-redux';

import { HashRouter, Route, Link } from "react-router-dom";
// Components
import SideBar from './components/sidebar';
import Cart from './containers/cart';
import ProductList from './containers/product-list';

import {addNewProduct} from './actions/products.action'
import Modal from 'react-modal';
// CSS
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  onInputChange(event) {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({[key]: value})
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    this.subtitle.style.borderBottom = '1px solid black';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  saveProduct = () => {
    this.props.addNewProduct({name: this.state.name, price: this.state.price, available: this.state.available})
    this.closeModal()
  }

  render() {
    return (
      <HashRouter>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title"><Link to={"/products"} className="App-title">My simple shop</Link></h1>
            <div className='App-header-cart-section'>
              <button onClick={this.openModal} className='add-new-product-btn'>Add new product</button>
              <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                ariaHideApp={false}
                contentLabel="add new product Modal"
              >
                <h2 ref={subtitle => this.subtitle = subtitle}>Add new product</h2>
                <div>Enter information about product</div>
                <form className='add-new-product-form'>
                  <label className='add-new-product-label'>
                    Product name
                    &nbsp;
                    <input name='name' onChange={event=> this.onInputChange(event)} />
                  </label>
                    <br/>
                  <label className='add-new-product-label'>
                    Product price
                    &nbsp;
                    <input name='price' onChange={event=> this.onInputChange(event)} />
                  </label>
                  <br/>
                  <label  className='add-new-product-label'>
                    Products in stock
                    &nbsp;
                    <input name='available' onChange={event=> this.onInputChange(event)}/>
                  </label>
                </form>
                <div className='btn-container'>
                <button onClick={this.saveProduct} className='save-product-btn'>Save Product</button>
                <button onClick={this.closeModal} className='cansel-btn'>Cancel</button>
                </div>
              </Modal>
              <Link to={"/cart"}>
                <img className='cart-image' src='https://icon2.kisspng.com/20180320/dvq/kisspng-shopping-cart-computer-icons-white-cart-png-simple-5ab15d02e7c8b8.7488579515215731229494.jpg' alt='Cart' />
              </Link>
              <div className='cart-count'>{this.props.inCart.length}</div>
            </div>
          </header>
          <div className="App-wrapper">
            <SideBar />
            <Route path={"/products"} component={ProductList} />
            <Route path={"/cart"} component={Cart} />
          </div>
        </div>
      </HashRouter>
    );
  }
}
const mapStateToProps = state => ({ inCart: state.cart.inCart, products: state.products.products, modal: state.modal })
const mapDispatchToProps = dispatch => ({
  addNewProduct: (product) => dispatch(addNewProduct(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
