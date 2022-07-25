import { useState } from "react";
import setinha from "../assets/images/setinha.png"

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

function BackCard(props) {

    const [finishedCard, setFinishedCard] = useState("finishedCard hidden");
    const [finishedCardTittle, setfinishedCardTittle] = useState("");
    const [finishedCardIconClass, setfinishedCardIconClass] = useState("");
    const [finishedCardIconName, setfinishedCardIconName] = useState("");

    const [backCardVisibility, setBackCardVisibility] = useState("backCard");

    const [answerCardVisibility, setAnswerCardVisibility] = useState("anwerCard hidden")

    function handleButtonMissed() {
        console.log("handelou o clique");
        // setCardClass("card");
        setAnswerCardVisibility("anwerCard hidden");
        setFinishedCard("finishedCard");
        setfinishedCardTittle("frontCardTittle missed");
        setfinishedCardIconClass("questionIcon missed");
        setfinishedCardIconName("close-circle");
        cardActive = 0;
    }

    function handleButtonAlmost() {
        setAnswerCardVisibility("anwerCard hidden");
        setFinishedCard("finishedCard");
        setfinishedCardTittle("frontCardTittle almost");
        setfinishedCardIconClass("questionIcon almost");
        setfinishedCardIconName("help-circle");
        cardActive = 0;
        // rightAnswers++

    }

    function handleButtonZap() {
        setAnswerCardVisibility("anwerCard hidden");
        setFinishedCard("finishedCard");
        setfinishedCardTittle("frontCardTittle zap");
        setfinishedCardIconClass("questionIcon zap");
        setfinishedCardIconName("checkmark-circle");
        cardActive = 0;
        // rightAnswers++
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



function Cards({d}) {


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
    <li key={d.key} className={cardClass}
      onClick={() => {
        startZap();
      }}
    >
      {checked ? <BackCard d={d} changeClass={cardClass => setCardClass(cardClass)} /> : <FrontCard d={d} />}
    </li>
  );
}

function List() {
  return (
    <ul>
      {deckdata.map((d) => {
        return <Cards d={d} />;
      })}
    </ul>
  );
}

export default function Deck() {
  return (
      <List />
  );
}
