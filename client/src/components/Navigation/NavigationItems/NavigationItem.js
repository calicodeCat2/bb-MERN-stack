import React from 'react';
import './NavigationItems.scss'
import { NavLink } from 'react-router-dom';
const NavigationItem = ( props ) => {
    return (
        <li className="nav-list--item">
            <NavLink
            to={props.link}
            exact={props.exact}
            >{props.children}</NavLink>
        </li>
    )
}

export default NavigationItem