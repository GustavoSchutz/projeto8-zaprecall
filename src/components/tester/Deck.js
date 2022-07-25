import { useState } from "react";
import setinha from "../assets/images/setinha.png"

export default function DeckTest() {
    return (
        <List />
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