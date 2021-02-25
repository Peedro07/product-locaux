import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import "./header.css";
import AuthService from "../../services/AuthService";


class Header extends Component {

    handleLogout(){
        AuthService.signOut();
        this.props.setUser(null);
    }

    render() {
        return (
            <>
                    <div className="flex h-20 justify-between">
                        <div className="flex items-center ml-6 mt-6">
                            .
                        </div>
                        <ul className="flex p-0 w-5/6 justify-end items-center mr-6 mt-6 font-semibold text-white">
                            <li className="mr-6 transform hover:scale-105 duration-150">
                                <NavLink activeClassName="underline" to={'/'} exact>Accueil</NavLink>
                            </li>
                            <li className="mr-6 transform hover:scale-105 duration-150"><NavLink
                                activeClassName="underline"
                                to={'/producteurs'}
                                exact>Producteurs</NavLink>
                            </li>
                            <li className="mr-6 transform hover:scale-105 duration-150"><NavLink
                                activeClassName="underline"
                                to={'/marches'}
                                exact>Marchés</NavLink>
                            </li>
                            {this.props.user == null &&
                            <>
                                <li className="mr-6 transform hover:scale-105 duration-150">
                                    <NavLink activeClassName="underline"
                                             to={'/login'} exact>Se connecter</NavLink></li>
                                <li className="p-3 bg-white text-blue-600 font-semibold rounded-full transform hover:scale-105 hover:bg-blue-500
                        hover:border-white hover:border-opacity-100 hover:text-white duration-150">
                                    <NavLink activeClassName="underline" to={'/register'} exact>Inscrivez-vous</NavLink>
                                </li>
                            </>}
                            {this.props.user != null &&
                            <>
                                <li className="mr-6 transform hover:scale-105 duration-150">
                                    <NavLink activeClassName="underline"
                                             to={'/account'} exact>Mon compte</NavLink></li>
                                <li className="mr-6 transform hover:scale-105 duration-150">
                                    <button className="font-semibold" onClick={() => this.handleLogout()}>Se
                                        déconnecter
                                    </button>
                                </li>
                            </>}
                        </ul>
                    </div>
            </>
        );
    }
}

export default Header;
