import React from 'react';
import {BrowserRouter as Router, NavLink} from "react-router-dom";
import "./header.css";

function Header() {
    return (
        <>
            <Router>
                <div className="flex h-20 justify-between">
                    <div className="flex items-center ml-6 mt-6">
                        .
                    </div>
                    <ul className="flex p-0 w-5/6 justify-end items-center mr-6 mt-6 font-semibold text-white">
                        <li className="mr-6 transform hover:scale-105 duration-150">
                            <NavLink activeClassName="underline" to="/">Accueil</NavLink>
                        </li>
                        <li className="mr-6 transform hover:scale-105 duration-150"><NavLink activeClassName="underline"
                                                                                             to="/producteurs">Producteurs</NavLink>
                        </li>
                        <li className="mr-6 transform hover:scale-105 duration-150"><NavLink activeClassName="underline"
                                                                                             to="/marches">Marchés</NavLink>
                        </li>
                        <li className="mr-6 transform hover:scale-105 duration-150"><NavLink activeClassName="underline"
                                                                                             to="/login">Se
                            connecter</NavLink></li>
                        <li class="p-3 bg-white text-blue-600 font-semibold rounded-full transform hover:scale-105 hover:bg-blue-500
                        hover:border-white hover:border-opacity-100 hover:text-white duration-150">
                            <NavLink activeClassName="underline" to="/signup">Inscrivez-vous</NavLink></li>
                    </ul>
                </div>
            </Router>
        </>
    );
}

export default Header;
