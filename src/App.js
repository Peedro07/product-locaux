import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/header/header";
import Login from "./components/login/login";


function App() {
    return (
        <Router>
            <div className="bg-indigo-400 h-full">
                <Header/>
                <Switch>
                    <Route path="/login">
                        <Login/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
