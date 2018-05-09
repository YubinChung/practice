import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './TopMenus.css'

class TopMenus extends Component {
    render() {
        return (
            <div className="header">
                <NavLink exact to="/" className="item" activeClassName="active">Home</NavLink>
                <NavLink to="/about/yubin" className="item" activeClassName="active">About</NavLink>
                <NavLink to="/posts" className="item" activeClassName="active">Posts</NavLink>
                <NavLink to="/Login" className="item" activeClassName="active">Login</NavLink>
                <NavLink to="/me" className="item" activeClassName="active">My page</NavLink>
                <NavLink to="/search" className="item" activeClassName="active">Search</NavLink>
            </div>
        );
    }
}

export default TopMenus;