import React from 'react';
import './sidebar.css';
import { HashRouter as Router, NavLink } from "react-router-dom";

export const SideBar = (props) => {
  return (<div className="App-sidebar">
    <nav className="App-sidebar-nav">
    <NavLink to={process.env.PUBLIC_URL + "/products"} activeStyle={{ backgroundColor: 'grey' }}>Product list</NavLink>
    <NavLink to={process.env.PUBLIC_URL + "/cart"} activeStyle={{ backgroundColor: 'grey' }}>Cart</NavLink>
    </nav>
  </div>);
};

export default SideBar;