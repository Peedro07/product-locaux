import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/header/header";
import Login from "./components/login/login";
import React from 'react';
import Homepage from './components/homepage/Homepage'
import Footer from "./components/footer/Footer";

function App() {

    return (
        <div className="bg-gradient-to-tr from-blue-400 to-blue-700 h-full">
            <Router>
                <Header/>
                <Route path="/" exact component={Homepage}/>
                <Route path="/login" exact component={Login}/>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
