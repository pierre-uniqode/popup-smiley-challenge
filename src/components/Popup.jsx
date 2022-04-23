import '../styles/Popup.css'
import Smileys from "./Smileys";
import close from "../assets/close.png";
import love from "../assets/love.png";
import {useEffect} from "react";

function Popup(props) {
    function activateSmiley(evt, message) {
        const smileys = document.getElementsByClassName("smiley");
        const textContainer = document.getElementById("text-value");
        var elementActivated = false;

        for(let i = 0 ; i < smileys.length ; i++) {
            if(smileys[i] != evt.currentTarget) {
                smileys[i].classList.remove("active");
            }
        }

        evt.currentTarget.classList.toggle("active");

        for(let i = 0 ; i < smileys.length ; i++) {
            if(smileys[i].classList.contains("active")) {
                elementActivated = true;
            }
        }

        if(elementActivated) {
            for(let i = 0 ; i < smileys.length ; i++) {
                if(smileys[i] != evt.currentTarget) {
                    smileys[i].style.opacity = 0.7;
                }
                else {
                    smileys[i].style.opacity = 0.7;
                }
            }

            textContainer.innerText = message;
            textContainer.style.opacity = 1;
            displaySendButton();
        }
        else {
            for(let i = 0 ; i < smileys.length ; i++) {
                smileys[i].style.opacity = 1;
            }
            textContainer.style.opacity = 0;
            hideSendButton()
        }
    }

    function displaySendButton() {
        const popupContent = document.getElementById("popup-content");
        const sendButton = document.getElementById("send-button");

        popupContent.style.transform = "translateY(-50px)";
        sendButton.style.transform = "translateY(0)";
    }

    function hideSendButton() {
        const popupContent = document.getElementById("popup-content");
        const sendButton = document.getElementById("send-button");

        popupContent.style.transform = "translateY(0px)";
        sendButton.style.transform = "translateY(100%)";
    }

    function loadingEffect() {
        const popupContainer = document.querySelector(".popup-container");
        const popupContainerClone = document.querySelector(".popup-container-clone");

        popupContainer.style.transform = "translateY(0) translateX(0) scale(1)";
        popupContainerClone.style.transform = "translateY(-50%) translateX(-50%) scale(1)";

        setTimeout(() => {
            popupContainer.style.transform = " translateY(-10px) translateX(10px)";
            popupContainerClone.style.transform = " translateY(calc(-50% + 10px)) translateX(calc(-50% - 10px))";
        }, 1200);
    }

    useEffect(() => {
        loadingEffect()
    }, [loadingEffect]);

    return (
        <div className="popups-wrapper">
            <div className="popup-container-clone"></div>
            <div className="popup-container">
                <div className="close-button" onClick={props.closePopup}>
                    <div className="close-wrapper">
                        <div className="close-background"></div>
                        <img src={close} />
                        <p>Passer</p>
                    </div>
                </div>

                <div className="circle-text-container">
                    <div className="arrow"></div>
                    <img src={love} />
                </div>

                <div className="send-button-container-overflow">
                    <div id="popup-content">
                        <p>Bravo Benjamin, tu viens de télécharger Bootstrap v5.1.3</p>
                        <h1>Dis-nous ce que tu en as pensé !</h1>
                        <Smileys activateSmiley={activateSmiley} />
                    </div>

                    <div id="send-button" className="send-button" onClick={props.closePopup}>
                        <div className="send-wrapper">
                            <div className="send-background"></div>
                            <p>Envoyer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popup;
