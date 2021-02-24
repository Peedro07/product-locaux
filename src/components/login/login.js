import React, {Component} from 'react';
import AuthenticationService from "../../services/AuthService";
import '../../index.css'
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
                    console.log(AuthenticationService.getCurrentUser())
                    this.props.history.push('/');
                },
                error => {
                    console.log("Login échoué: erreur = { " + error.toString() + " }");
                    this.setState({error: "Email/Mot de passe incorrect"});
                }
            );
    }

    render() {
        return (
            <div className="w-full max-w-md m-auto bg-indigo-100 rounded p-10 mt-36 fade-in">
                <form onSubmit={this.doLogin}>
                    <div>
                        <label className="block mb-2 text-indigo-500" htmlFor="email">Email</label>
                        <input
                            className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                            type="text" id="email" name="email" placeholder="Ex: user@gmail.com" value={this.state.email} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <label className="block mb-2 text-indigo-500" htmlFor="password">Mot de passe</label>
                        <input
                            className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                            type="password" name="password" placeholder="Votre mot de passe" value={this.state.password} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input
                            className="w-full bg-blue-600 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded"
                            type="submit"/>
                    </div>
                </form>
                <footer>
                    <a className="text-blue-600 hover:text-pink-700 text-sm float-left" href="#">Mot de passe oublié
                        ?</a>
                    <a className="text-blue-600 hover:text-pink-700 text-sm float-right" href="#">Créer un compte</a>
                </footer>
            </div>);
    }
}

export default Login;