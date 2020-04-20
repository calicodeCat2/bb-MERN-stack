import React from 'react';
import './NavigationItem.scss'
import { NavLink } from 'react-router-dom';
const NavigationItem = ( props ) => {
    return (
        <li className="nav-list">
            <NavLink
            className="nav-list--item"
            to={props.link}
            exact={props.exact}
            >{props.children}</NavLink>
        </li>
    )
}

export default NavigationItem