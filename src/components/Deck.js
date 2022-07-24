

export default function Deck() {

     // const [cardIsActive, setCardIsActive] = React.useState([]);



     function changeTurned(arr) {
        if(arr.key === 1) {
            arr.turned = false;
        }
    }
    
    const handleClickActivateCard = (e) => {
        console.log("hello", e);
    }
    function isActive(){

    }

    const cards = [
        { key: "q1", question: "O que é JSX?", answer:"Uma extensão de linguagem do JavaScript", turned: false },
        { key: "q2", question: "O React é __ ", answer:"uma biblioteca JavaScript para construção de interfaces", turned: false },
        { key: "q3", question: "Componentes devem iniciar com __ ", answer:"letra maiúscula", turned: false },
        { key: "q4", question: "Podemos colocar __ dentro do JSX", answer:"expressões", turned: false }
    ]

    return (
        <ul className="deck">
        {cards.map(cardsObj =>
            <li onClick={handleClickActivateCard} key={cardsObj.key} className="card">
                <div className="frontCard">
                    <p>Pergunta {((cardsObj.index) + 1)}</p>
                    <ion-icon className="questionIcon" name="play"></ion-icon>
                </div>
                <div className="backCard hidden">
                    <div className="question">
                        <h3>{cardsObj.question}</h3>
                    </div>
                    <div className="enter">
                        <ion-icon name="return-down-forward-outline"></ion-icon>
                    </div>
                </div>
            </li>)}
        </ul>
    )

}