import React from 'react';
import {BrowserRouter, Link} from "react-router-dom";

function Header() {
    return (
        <>
            <BrowserRouter>
                <ul>
                    <li>
                        <Link to="/accueil"> Accueil</Link>
                    </li>
                    <li>Producteurs</li>
                    <li>Marcher</li>
                </ul>
            </BrowserRouter>
        </>
    );
}

export default Header;
