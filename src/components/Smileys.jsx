import React, { useEffect } from 'react';
import '../styles/Smileys.css';

function Smileys(props) {
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
        <div className="smileys-wrapper">
            <div className="smileys-container">
                <div className="smiley very-sad" onClick={(e) => props.activateSmiley(e, "1/5 - Pignolesque")}>
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

                <div className="smiley sad" onClick={(e) => props.activateSmiley(e, "2/5 - Nul")}>
                    <div className="face-container">
                        <div className="eye"></div>
                        <div className="mouth"></div>
                        <div className="eye"></div>
                    </div>
                </div>

                <div className="smiley neutral" onClick={(e) => props.activateSmiley(e, "3/5 - Passable")}>
                    <div className="face-container">
                        <div className="eye"></div>
                        <div className="mouth"></div>
                        <div className="eye"></div>
                    </div>
                </div>

                <div className="smiley happy" onClick={(e) => props.activateSmiley(e, "4/5 - Au top !")}>
                    <div className="face-container">
                        <div className="eye"></div>
                        <div className="mouth"></div>
                        <div className="eye"></div>
                    </div>
                </div>

                <div className="smiley very-happy" onClick={(e) => props.activateSmiley(e, "5/5 - Formidable !")}>
                    <div className="face-container">
                        <div className="eye"></div>
                        <div className="mouth"></div>
                        <div className="eye"></div>
                    </div>
                </div>
            </div>

            <p id="text-value">

            </p>
        </div>
    );
}

export default Smileys;
