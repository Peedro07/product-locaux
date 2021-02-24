import React, {Component} from 'react';
import '../../index.css';

class Homepage extends Component {
    render() {
        return (
            <div className="container mx-auto z-20 mt-36">
                <div className="flex flex-col items-center font-bold fade-in">
                    <p className="text-7xl text-white">Producteur <span
                        className="bg-white text-blue-600 rounded-xl">locaux</span>,</p>
                    <p className="text-5xl text-white mt-3">une <span
                        className="bg-white text-blue-600 rounded-xl">aventure</span> Angevine</p>
                </div>
                <div className="flex flex-col items-center font-bold fade-in mt-20">
                    <p className="text-4xl text-white">Vendez vos produits cultivés <span
                        className="italic">localement</span>,</p>
                    <p className="text-4xl text-white mt-3">Achetez à vos <span className="italic">producteurs</span> du
                        coin</p>
                </div>
            </div>
        );
    }
}

export default Homepage;