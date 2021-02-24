import React, { Component } from 'react';
import AuthenticationService from "../../services/AuthService";

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            error: ""
        };
    }

    changeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    doLogin = async (event) => {
        event.preventDefault();

        AuthenticationService
            .login(this.state.email,
                this.state.password)
            .then(
                () => {
                    this.props.history.push('/profile');
                },
                error => {
                    console.log("Login échoué: erreur = { " + error.toString() + " }");
                    this.setState({error: "Email/Mot de passe incorrect"});
                }
            );
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="flex flex-row" style={{marginTop:"20px"}}>
                        <div className="grid grid-cols-12">
                            <form onSubmit={this.doLogin}>
                                    <label htmlFor="email"><strong>Email</strong></label>
                                    <input autoFocus
                                           type="text"
                                           name="email" id="email"
                                           value={this.state.email}
                                           placeholder="Entrez l'adresse mail"
                                           autoComplete="email"
                                           onChange={this.changeHandler}
                                    />
                                    <label htmlFor="password"><strong>Password</strong></label>
                                    <input type="password"
                                           name="password" id="password"
                                           value={this.state.password}
                                           placeholder="Entrez le mot de passe"
                                           autoComplete="password"
                                           onChange={this.changeHandler}
                                    />

                                <button type="submit" className="p-6 bg-yellow-300 font-semibold">
                                   Se connecter
                                </button>
                                {
                                    this.state.error && (
                                        <div className="bg-red-600 text-white">
                                            {this.state.error}
                                        </div>
                                    )
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </div>);
    }
}

export default Login;