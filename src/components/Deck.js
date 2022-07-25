import { useState } from "react";
import setinha from "../assets/images/setinha.png"

const deckdata = [
    { key: "q1", title: "Pergunta 1", question: "O que é JSX?", answer:"Uma extensão de linguagem do JavaScript" },
    { key: "q2", title: "Pergunta 2" , question: "O React é __ ", answer:"uma biblioteca JavaScript para construção de interfaces" },
    { key: "q3", title: "Pergunta 3" , question: "Componentes devem iniciar com __ ", answer:"letra maiúscula" },
    { key: "q4", title: "Pergunta 4" , question: "Podemos colocar __ dentro do JSX", answer:"expressões" }
];



function FrontCard({d}) {
    return (
        <div className="frontCard">
            <p className="frontCardTittle">{(d.title)}</p>
            <ion-icon className="questionIcon" name="play"></ion-icon>
        </div>
    )
}

function BackCard({d}) {

    const [backCardVisibility, setBackCardVisibility] = useState("backCard");

    const [answerCardVisibility, setAnswerCardVisibility] = useState("anwerCard hidden")

    function handleClickSubmit() {
        console.log("handelou o clique");
        setBackCardVisibility("backCard hidden");
        setAnswerCardVisibility("answerCard")
    }

    return (
    <>
        <div className={backCardVisibility}>
            <div className="question">
                <h3>{d.question}</h3>
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
                <h3>{d.answer}</h3>
            </div>
            <div className="buttons">
                <div className="buttonMissed"><p className="paragraphButtonsSubmit">Não lembrei</p></div>
                <div className="buttonAlmost"><p className="paragraphButtonsSubmit">Quase não lembrei</p></div>
                <div className="buttonZap"><p className="paragraphButtonsSubmit">Zap!</p></div>
            </div>
        </div>
    </>
    )
   
}

let cardActive = 0;



function Cards({ d }) {


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
      {checked ? <BackCard d={d} /> : <FrontCard d={d} />}
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
