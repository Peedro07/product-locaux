import './App.css';
import Header from "./components/header/header";
import React, {Component} from 'react';
import Footer from "./components/footer/Footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import Login from "./components/login/login";
import Register from "./components/register/Register";
import axios from "axios";
import AuthService from "./services/AuthService";

export default class App extends Component {

    state = {};

    componentDidMount = () => {
        if(AuthService.getCurrentUser()){
            axios.get('user').then(
                res => {
                    console.log(res.data.user)
                    this.setUser(res.data.user)
                }
            )
        }
    }

    setUser = user => {
        this.setState({
            user: user
        })
    }

    render() {
        return (
            <>
                <div className="bg-gradient-to-tr from-blue-400 to-blue-700 h-full">
                    <Router>
                        <Header user={this.state.user} setUser={this.setUser}/>
                        <Route path={'/'} component={() => <Homepage user={this.state.user}/>} exact/>
                        <Switch>
                            <Route path={'/login'} component={() => <Login setUser={this.setUser}/>}/>
                            <Route path={'/register'} component={() => <Register/>}/>
                        </Switch>
                    </Router>
                </div>
                <Footer/>
            </>
        );
    }
}