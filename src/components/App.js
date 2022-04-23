import '../styles/App.css'
import Popup from "./Popup";
import decoration from "../assets/decoration-dots.png";
import background from "../assets/background.svg";
import {useEffect} from "react";

function App() {
    function loadingEffect() {
        const background = document.querySelector(".background");
        const decoration = document.querySelector(".decoration");

        background.style.opacity = 1;
        background.style.top = "55vh";

        setTimeout(() => {
            decoration.style.opacity = 1;
            decoration.style.transform = "translateX(0px)";
        }, 500);
    }

    function closePopup() {
        const background = document.querySelector(".background");
        const decoration = document.querySelector(".decoration");
        const popupsWrapper = document.querySelector(".popups-wrapper");

        popupsWrapper.style.transform = "translateY(100vh)";

        setTimeout(() => {
            background.style.opacity = 0;
            background.style.top = "60vh";
            decoration.style.opacity = 0;
            decoration.style.transform = "translateX(-100px)";
        }, 300);
    }

    useEffect(() => {
        loadingEffect()
    }, [loadingEffect]);

    return (
        <div className="App">
            <img className="decoration" src={decoration} />
            <Popup closePopup={closePopup}/>
            <img className="background" src={background} />
        </div>
    );
}

export default App;
