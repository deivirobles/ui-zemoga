import React from 'react';
import facebook from '../assets/img/facebook.png';
import twitter from '../assets/img/twitter.png';

function Footer() {
    return (
        <div className="app-footer container">
            <div className="d-flex">
                <ul className="left d-flex">
                    <li>
                        <a href="#">Terms and Conditions</a>
                    </li>
                    <li>
                        <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                </ul>
                <ul className="right d-flex">
                    <li>
                        <a href="#">Folow Us</a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={facebook} className="facebook" alt="facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={twitter} className="twitter" alt="twitter" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;