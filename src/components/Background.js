import react from "react";
import Screen2 from "./Screen2";
import logo from "../assets/images/logo.png"
import { useState } from "react"

export default function Background() {
    
    const [display, setDisplay] = react.useState("screen1")
    const [displayScreen2, setDisplayScreen2] = useState("screen2 hidden")


    function startRecall() {
        const hide = "screen1 hidden";
        setDisplay(hide);
        setDisplayScreen2("screen2");
    }

    return (
        <div className="background">
            <div className={display}>
                <div className="logo">
                    <img alt="" src={logo} />
                </div>
                <h1>ZapRecall</h1>
                <div className="button" onClick={startRecall} >Iniciar Recall!</div>
            </div>
            <Screen2 changeDisplayScreen2={displayScreen2}/>
        </div>
    )
}