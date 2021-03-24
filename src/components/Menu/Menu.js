import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';

const menus = [
    {
        name: 'Trang chu',
        to : '/',
        exact : true
    },
    {
        name : 'Quan ly san pham',
        to : '/product-list',
        exact : false
    }
]

const MenuLink = ({label, to, activeOnlyWhenExact}) => {
    return (
        <Route
            path = {to}
            exact = {activeOnlyWhenExact}
            children = {({match})=> {
                var active = match ? 'active' : ''
                return (
                    <li className={active}>
                        <Link to={to}>
                            {label}
                        </Link>
                    </li>
                )
            }}
        ></Route>
    )
}

class Menu extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <a className="navbar-brand" href="/">API call</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            {this.showMenu(menus)}
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
    showMenu = (menus) => {
        var result = null
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label = {menu.name}
                        to={menu.to}
                        activeOnlyWhenExact = {menu.exact}
                    ></MenuLink>
                )
            });
        }
        return result
    }
}

export default Menu;
 