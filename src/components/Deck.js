import { useState } from "react";
import setinha from "../assets/images/setinha.png"

const deckdata = [
    { key: "q1", title: "Pergunta 1", question: "O que é JSX?", answer:"Uma extensão de linguagem do JavaScript" },
    { key: "q2", title: "Pergunta 2" , question: "O React é __ ", answer:"uma biblioteca JavaScript para construção de interfaces" },
    { key: "q3", title: "Pergunta 3" , question: "Componentes devem iniciar com __ ", answer:"letra maiúscula" },
    { key: "q4", title: "Pergunta 4" , question: "Podemos colocar __ dentro do JSX", answer:"expressões" }
];

const FrontCard = ({d}) => <div className="frontCard">
                            <p>{(d.title)}</p>
                            <ion-icon className="questionIcon" name="play"></ion-icon>
                        </div>;
const BackCard = ({d}) => <div className="backCard">
                            <div className="question">
                                <h3>{d.question}</h3>
                            </div>
                            <div className="enter">
                                <div className="buttonEnter">
                                    <img alt="" src={setinha}/>
                                </div>
                            </div>
                        </div>;



function Cards({ d }) {

    const [cardClass, setCardClass] = useState("card");

    const [checked, setChecked] = useState(false);

    function startZap() {
        if (!checked) {
            console.log("deu")

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
