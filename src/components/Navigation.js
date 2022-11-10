import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav-active">
                Produits
            </NavLink>
            <NavLink exact to="/ajout" activeClassName="nav-active">
                Ajout
            </NavLink>
            <NavLink exact to="/categories" activeClassName="nav-active">
                Catégories
            </NavLink>
            <NavLink exact to="/ordre" activeClassName="nav-active">
                Ordre
            </NavLink>
        </div>
    )
}

export default Navigation;