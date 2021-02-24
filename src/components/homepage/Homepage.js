import React, {Component} from 'react';
import '../../index.css';

class Homepage extends Component {
    render() {
        return (
            <div className="container mx-auto h-full">
                <div className="flex flex-col items-center font-bold mt-36 fade-in">
                    <p className="text-7xl text-white">Producteur <span className="bg-white text-blue-600 rounded-xl">locaux</span>,</p>
                    <p className="text-5xl text-white mt-3">une <span className="bg-white text-blue-600 rounded-xl">aventure</span> Angevine</p>
                </div>
            </div>
        );
    }
}

export default Homepage;