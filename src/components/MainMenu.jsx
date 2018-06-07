import React from "react";
import {
    NavLink
  } from "react-router-dom";

const MainMenu = ({routes}) => (
    <nav className="nav flex-column nav-pills">
        {routes.map(
            r => <NavLink key={r.to} className="nav-link" activeClassName="active" to={r.to}>{r.label}</NavLink>
        )}
    </nav>
);

export default MainMenu;