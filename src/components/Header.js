import React from 'react';
import search from '../assets/img/search.png';
import '../App.scss';


function Header() {
    return (
        <div className="app-header">
            <div className="container ">
                <div className="d-flex">
                    <ul className="left">
                        <li>
                            <h2>Rule of Thumb</h2>
                        </li>
                    </ul>
                    <ul className="right">
                        <li>
                            <a>Past Trials</a>
                        </li>
                        <li>
                            <a>How It Works</a>
                        </li>
                        <li>
                            <a>Log In / Sign Up</a>
                        </li>
                        <li>
                            <a><img src={search} className="search" alt="search" /></a>
                        </li>
                    </ul>

                </div>
            </div>

        </div>
    );
}

export default Header;
