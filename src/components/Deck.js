

export default function Deck() {

     // const [cardIsActive, setCardIsActive] = React.useState([]);



    //  function changeTurned(arr) {
    //     if(arr.key === 1) {
    //         arr.turned = false;
    //     }
    // }
    
    const handleClickActivateCard = (e) => {
        console.log(this);
    }
    function isActive(){
        const [isTurned, setIsTurned] = useState(false)
    }
    const activeCard = () =>  


    const cards = [
        { key: "q1", title: "Pergunta 1", question: "O que é JSX?", answer:"Uma extensão de linguagem do JavaScript", },
        { key: "q2", title: "Pergunta 2" , question: "O React é __ ", answer:"uma biblioteca JavaScript para construção de interfaces", },
        { key: "q3", title: "Pergunta 3" , question: "Componentes devem iniciar com __ ", answer:"letra maiúscula", },
        { key: "q4", title: "Pergunta 4" , question: "Podemos colocar __ dentro do JSX", answer:"expressões", }
    ]

    return (
        <ul className="deck">
        {cards.map(cardsObj =>
            <li onClick={() => {
                setIsTurned = !isTurned
            }} key={cardsObj.key} className="card">
                <div className="frontCard">
                    <p>{(cardsObj.title)}</p>
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


    return (
        <ul className="deck">
        {cards.map(cardsObj =>
            <li onClick={() => {
                setIsTurned = !isTurned
            }} key={cardsObj.key} className="card">
                <div className="frontCard">
                    <p>{(cardsObj.title)}</p>
                    <ion-icon className="questionIcon" name="play"></ion-icon>
                </div>
            </li>)}
        </ul>
    )

}


