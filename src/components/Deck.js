import { useState } from "react";
import setinha from "../assets/images/setinha.png"
import Footer from "./Footer.js"


const deckdata = [
    { key: "q1", title: "Pergunta 1", question: "O que é JSX?", answer:"Uma extensão de linguagem do JavaScript" },
    { key: "q2", title: "Pergunta 2" , question: "O React é __ ", answer:"uma biblioteca JavaScript para construção de interfaces" },
    { key: "q3", title: "Pergunta 3" , question: "Componentes devem iniciar com __ ", answer:"letra maiúscula" },
    { key: "q4", title: "Pergunta 4" , question: "Podemos colocar __ dentro do JSX", answer:"expressões" }
];



function FrontCard(props) {
    return (
        <div className="frontCard">
            <p className="frontCardTittle">{(props.d.title)}</p>
            <ion-icon className="questionIcon" name="play"></ion-icon>
        </div>
    )
}


let newFooterData;

function BackCard(props) {


    function addFooterData(obj) {
         props.setFooterData( [...props.footerData, obj ] );
    }



    const [finishedCard, setFinishedCard] = useState("finishedCard hidden");
    const [finishedCardTittle, setfinishedCardTittle] = useState("");
    const [finishedCardIconClass, setfinishedCardIconClass] = useState("");
    const [finishedCardIconName, setfinishedCardIconName] = useState("");

    const [backCardVisibility, setBackCardVisibility] = useState("backCard");

    const [answerCardVisibility, setAnswerCardVisibility] = useState("anwerCard hidden")


    function handleButtonMissed() {
        props.setCountAnswer(props.countAnswer + 1)
        // setCardClass("card");
        setAnswerCardVisibility("anwerCard hidden");
        setFinishedCard("finishedCard");
        setfinishedCardTittle("frontCardTittle missed");
        setfinishedCardIconClass("questionIcon missed");
        setfinishedCardIconName("close-circle");
        newFooterData = {class: "footerIcon missed" ,name: "close-circle"}
        addFooterData(newFooterData);
        cardActive = 0;
        errorCounter++;
        answeredCounter++;
        if (answeredCounter === 4) {
            props.setNoError(false);
        }
   

    }

    function handleButtonAlmost() {
        props.setCountAnswer(props.countAnswer + 1)

        setAnswerCardVisibility("anwerCard hidden");
        setFinishedCard("finishedCard");
        setfinishedCardTittle("frontCardTittle almost");
        setfinishedCardIconClass("questionIcon almost");
        setfinishedCardIconName("help-circle");
        newFooterData = {class: "footerIcon almost" ,name: "help-circle"}
        addFooterData(newFooterData);
        cardActive = 0;
        // rightAnswers++
        answeredCounter++;
        correctCounter++;
        if (answeredCounter === 4 && correctCounter === 4) {
            props.setNoError(true);
        }
        
    }

    function handleButtonZap() {
        props.setCountAnswer(props.countAnswer + 1)

        setAnswerCardVisibility("anwerCard hidden");
        setFinishedCard("finishedCard");
        setfinishedCardTittle("frontCardTittle zap");
        setfinishedCardIconClass("questionIcon zap");
        setfinishedCardIconName("checkmark-circle");
        newFooterData = {class: "footerIcon zap" ,name: "checkmark-circle"}
        addFooterData(newFooterData);
        cardActive = 0;
        // rightAnswers++
        answeredCounter++;
        correctCounter++;
        if (answeredCounter === 4 && correctCounter === 4) {
            props.setNoError(true);
        }
    }

    function handleClickSubmit() {
        setBackCardVisibility("backCard hidden");
        setAnswerCardVisibility("answerCard")
    }
<div className="frontCard">
            <p className="frontCardTittle">{(props.d.title)}</p>
            <ion-icon className="questionIcon" name="play"></ion-icon>
        </div>
    return (
    <>
        <div className={backCardVisibility}>
            <div className="question">
                <h3>{props.d.question}</h3>
            </div>
            <div className="enter">
                <div onClick={() => {
                handleClickSubmit();
                }} className="buttonEnter">
                    <img alt="" src={setinha}/>
                </div>
            </div>
        </div>
        <div className={answerCardVisibility}>
            <div className="answer">
                <h3>{props.d.answer}</h3>
            </div>
            <div className="buttons">
                <div onClick={() => {
                    handleButtonMissed();
                    props.changeClass("card")
                    }} className="buttonMissed"><p className="paragraphButtonsSubmit">Não lembrei</p></div>
                <div onClick={() => {
                    handleButtonAlmost();
                    props.changeClass("card")
                    }} className="buttonAlmost"><p className="paragraphButtonsSubmit">Quase não lembrei</p></div>
                <div onClick={() => {
                    handleButtonZap();
                    props.changeClass("card")
                    }} className="buttonZap"><p className="paragraphButtonsSubmit">Zap!</p></div>
            </div>
        </div>
        <div className={finishedCard}>
            <p className={finishedCardTittle}>{(props.d.title)}</p>
            <div className={finishedCardIconClass}>
                <ion-icon className={finishedCardIconClass} name={finishedCardIconName}></ion-icon>
            </div>
        </div>
    </>
    )
   
}

let cardActive = 0;



function Cards(props) {


    const [cardClass, setCardClass] = useState("card");

    const [checked, setChecked] = useState(false);


    function startZap() {
        if (!checked && cardActive === 0) {
            cardActive++
            setChecked(!checked);
            activeCard();
        }
        
    }

    function activeCard() {
        setCardClass("card active");
    }

  return (
    <li key={props.d.key} className={cardClass}
      onClick={() => {
        startZap();
      }}
    >
      {checked ? <BackCard setNoError={props.setNoError} countAnswer={props.countAnswer} setCountAnswer={props.setCountAnswer} footerData={props.footerData} setFooterData={props.setFooterData} d={props.d} changeClass={cardClass => setCardClass(cardClass)} /> : <FrontCard d={props.d} />}
    </li>
  );
}

function List(props) {
  return (
    <ul>
      {deckdata.map((d) => {
        return <Cards setNoError={props.setNoError} countAnswer={props.countAnswer} setCountAnswer={props.setCountAnswer} footerData={props.footerData} setFooterData={props.setFooterData} d={d} />;
      })}
    </ul>
  );
}

let errorCounter = 0;
let correctCounter = 0;
let answeredCounter = 0;

export default function Deck() {

    const [footerData, setFooterData] = useState([{name:"heart", class:"white"}]);
    const [countAnswer, setCountAnswer] = useState(0);
    const [noError, setNoError] = useState(null)


  return (


    <>
        <List countAnswer={countAnswer} setNoError={setNoError} setCountAnswer={setCountAnswer} setFooterData={setFooterData} footerData={footerData} />
        <Footer countAnswer={countAnswer} footerData={footerData} noError={noError} />
    </>  
  );
}
