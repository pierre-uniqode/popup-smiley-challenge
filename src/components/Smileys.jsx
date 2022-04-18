import React, { useEffect } from 'react';
import '../styles/Smileys.css';

function Smileys() {
    function activateSmiley(evt) {
        const smileys = document.getElementsByClassName("smiley");

        for(let i = 0 ; i < smileys.length ; i++) {
            smileys[i].classList.remove("active");
        }

        evt.currentTarget.className += " active";
    }

    function randomizeEyesBlink() {
        const verySadSmileyParent = document.querySelector('.very-sad');
        const sadSmileyParent = document.querySelector('.sad');
        const neutralSmileyParent = document.querySelector('.neutral');
        const happySmileyParent = document.querySelector('.happy');
        const veryHappySmileyParent = document.querySelector('.very-happy');

        const verySadSmiley = verySadSmileyParent.getElementsByClassName('eye');
        const sadSmiley = sadSmileyParent.getElementsByClassName('eye');
        const neutralSmiley = neutralSmileyParent.getElementsByClassName('eye');
        const happySmiley = happySmileyParent.getElementsByClassName('eye');
        const veryHappySmiley = veryHappySmileyParent.getElementsByClassName('eye');

        let verySad = Math.random()*10;
        let sad = Math.random()*10;
        let neutral = Math.random()*10;
        let happy = Math.random()*10;
        let veryHappy = Math.random()*10;

        for(let i = 0 ; i < verySadSmiley.length ; i++) {
            verySadSmiley[i].style.animationDelay = verySad+'s';
        }

        for(let i = 0 ; i < sadSmiley.length ; i++) {
            sadSmiley[i].style.animationDelay = sad+'s';
        }

        for(let i = 0 ; i < neutralSmiley.length ; i++) {
            neutralSmiley[i].style.animationDelay = neutral+'s';
        }

        for(let i = 0 ; i < happySmiley.length ; i++) {
            happySmiley[i].style.animationDelay = happy+'s';
        }

        for(let i = 0 ; i < veryHappySmiley.length ; i++) {
            veryHappySmiley[i].style.animationDelay = veryHappy+'s';
        }
    }

    useEffect(() => {
        randomizeEyesBlink();
    }, [randomizeEyesBlink]);

    return (
        <div className="smileys-container">
            <div className="smiley very-sad" onClick={activateSmiley}>
                <div className="face-container">
                    <div className="eye-container">
                        <div className="eyebrow"></div>
                        <div className="eye"></div>
                    </div>

                    <div className="mouth"></div>

                    <div className="eye-container">
                        <div className="eyebrow right"></div>
                        <div className="eye"></div>
                    </div>
                </div>
            </div>

            <div className="smiley sad" onClick={activateSmiley}>
                <div className="face-container">
                    <div className="eye"></div>
                    <div className="mouth"></div>
                    <div className="eye"></div>
                </div>
            </div>

            <div className="smiley neutral" onClick={activateSmiley}>
                <div className="face-container">
                    <div className="eye"></div>
                    <div className="mouth"></div>
                    <div className="eye"></div>
                </div>
            </div>

            <div className="smiley happy" onClick={activateSmiley}>
                <div className="face-container">
                    <div className="eye"></div>
                    <div className="mouth"></div>
                    <div className="eye"></div>
                </div>
            </div>

            <div className="smiley very-happy" onClick={activateSmiley}>
                <div className="face-container">
                    <div className="eye"></div>
                    <div className="mouth"></div>
                    <div className="eye"></div>
                </div>
            </div>
        </div>
    );
}

export default Smileys;
