import './App.css';
import Header from "./components/header/header";
import React from 'react';
import Footer from "./components/footer/Footer";

function App() {

    return (
        <div className="bg-gradient-to-tr from-blue-400 to-blue-700 h-full">
                <Header/>
                <Footer/>
        </div>
    );
}

export default App;
