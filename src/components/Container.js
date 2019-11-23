import React from 'react';
import Card from './Card'
import cards from '../data/data.json';

function Container() {
    if(localStorage.getItem('actualData')==null){
        localStorage.setItem('actualData',JSON.stringify(cards));
    }
    return (
        <div className="app-container container">
            <div className="notice">
                <div className="col first">
                    <p className="title">
                        Speak Out Be Heard
                        <br />
                        <label className="bold">
                            Be counted
                        </label>
                    </p>
                </div>
                <div className="detail">
                    Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It's easy: You share your opinion, we analyze and put the data in a public report.
                </div>
                <div className="col close"><span>X</span></div>
            </div>
            <h2>Votes</h2>
            <div className="cards">
                {cards.map((e) =>
                    <div className="card">
                        <Card props={e} />
                    </div>
                )}
            </div>
            <div className="footer-container">
                <div>
                    Is there anyone else you would want us to add?
                </div>
                <button>Submit a name</button>
            </div>
        </div>
    )
}

export default Container;