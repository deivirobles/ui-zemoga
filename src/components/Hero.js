import React from 'react';
import w from '../assets/img/wiki.png';
import like from '../assets/img/like.svg';
import '../App.scss';
import Header from './Header';

function Hero() {
    return (
        <div className="background-hero wrapper">

            <div className="one">
                <Header />
            </div>
            <div className="two">
                <div className="vote-pope">
                    <div className="descript">
                        What´s your opinion on
                        <h2>Pope Francis?</h2>
                        <p>He's talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)</p>
                        <a href="#"><img src={w} alt="wikipedia" /> More information </a>
                        <h3>What's Your Verdict?</h3>
                    </div>
                    <div className="vote">
                        <div className="like w-50">
                            <img src={like} alt="wikipedia" />
                        </div>
                        <div className="dislike w-50">
                            <img src={like} alt="wikipedia" />
                        </div>
                    </div>
                </div>
            </div>
            <footer className="four align-end">
                <div className="d-flex">
                    <div className="w-50 closing tri">CLOSING IN</div>
                    <div className="w-50 days"><span>22</span> Days</div>
                </div>
            </footer>


        </div>
    )
}

export default Hero;