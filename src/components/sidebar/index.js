import React from 'react';
import './sidebar.css';
import { BrowserRouter as Router, NavLink } from "react-router-dom";

export const SideBar = (props) => {
  return (<div className="App-sidebar">
    <nav className="App-sidebar-nav">
    <NavLink to="/TM-Redux-task/products" activeStyle={{ backgroundColor: 'grey' }}>Product list</NavLink>
    <NavLink to="/TM-Redux-task/cart" activeStyle={{ backgroundColor: 'grey' }}>Cart</NavLink>
    </nav>
  </div>);
};

export default SideBar;