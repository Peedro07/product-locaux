import './App.css';
import {BrowserRouter} from "react-router-dom";
import Header from "./components/header/header";

function App() {
    return (
        <BrowserRouter>
            <div  className="bg-indigo-400">
                <Header/>
            </div>
        </BrowserRouter>
    );
}

export default App;
