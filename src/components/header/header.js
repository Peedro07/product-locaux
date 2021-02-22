import React from 'react';
import {BrowserRouter, NavLink} from "react-router-dom";
import "./header.css";

function Header() {
    return (
        <>
            <BrowserRouter>
                <div className="header h-20 flex justify-center">
                    <ul className="flex p-0 w-5/6 justify-center items-center">
                        <li>
                            <NavLink activeClassName="active" to="/accueil"> Accueil</NavLink>
                        </li>
                        <li>Producteurs</li>
                        <li>Marcher</li>
                    </ul>
                </div>
            </BrowserRouter>
        </>
    );
}

export default Header;
