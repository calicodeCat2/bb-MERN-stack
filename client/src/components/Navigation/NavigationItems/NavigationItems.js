import React from "react";
import "./NavigationItems.scss";

import NavigationItem from "./NavigationItem";

const NavigationItems = (props) => {
  return (
        <ul className="nav-list">
          <NavigationItem className="nav-list--item" link="/dashboard" exact>
            Dashboard
          </NavigationItem>
          <NavigationItem className="nav-list--item" link="/browse" exact>
            Browse
          </NavigationItem>
          <NavigationItem className="nav-list--item" link="/auth/login" exact>
            Login
          </NavigationItem>
          <NavigationItem className="nav-list--item" link="/auth/register" exact>
            Register
          </NavigationItem>
        </ul>
    
  );
};

export default NavigationItems;
