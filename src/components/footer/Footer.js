import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer id="footer" className="flex absolute w-full">
                <div className="text-white w-full text-center">
                        <div className="my-5">© Copyright 2021. Tous droits réservés.</div>
                </div>
            </footer>
        );
    }
}

export default Footer;