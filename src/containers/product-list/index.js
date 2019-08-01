import { connect } from 'react-redux';
import React, { Component } from 'react';

import { getProductsList } from '../../actions/products.action'
import { addToCart } from '../../actions/cart.actions'

import './product-list.css';



export class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedProducts: this.props.products
    };

  }
  
  
  componentDidMount() {
    this.props.getProductsList();
    // this.setState({ sortedProducts: this.props.products });
  }

  renderProducts() {
    return this.props.products.map((i, index) => (
      <div className="product_list_item" key={index}>
        <p>{i.name}</p>
        <p>Price: {i.price}</p>
        <p>{i.available > 0 ? 'In stock' : 'Sold out'}</p>
        <button disabled={!i.available > 0} className="add-to-cart-btn" onClick={() => this.addToCart(i)}>Add to card</button>
      </div>
    ));
  }

  addToCart = (i) => {
    this.props.addToCart(i);
  }

  sortProducts = (event) => {

    if (event.target.value === 'name') {
      this.setState({
        sortedProducts: this.props.products.sort((a, b) => (a.name > b.name) ? 1 : -1)
      })
    }
    else if (event.target.value === 'price') {
      this.setState({
        sortedProducts: this.props.products.sort((a, b) => a.price - b.price)
      })

    } else if (event.target.value === 'availability') {
      this.setState({
        sortedProducts: this.props.products.sort((a, b) => b.available - a.available)
      })
    } else {
      this.setState({sortedProducts: this.props.products})
    }
  }

  render() {
    return (
      <div>
        <select className='sortProducts' onChange={(event) => this.sortProducts(event)}>
          <option value='default'>Sort</option>
          <option value='name'>Name</option>
          <option value='price'>Price</option>
          <option value='availability'>Availability</option>
        </select>
        <div className="App-product_list">
          {this.renderProducts()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ products: state.products.products });
const mapDispatchToProps = dispatch => ({
  addToCart: (item) => dispatch(addToCart(item)),
  getProductsList: () => dispatch(getProductsList())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);