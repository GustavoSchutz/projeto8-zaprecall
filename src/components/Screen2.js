import logo from "../assets/images/logo.png"

export default function Screen2() {

    const deck = {card:["Pergunta 1", "Pergunta 2", "Pergunta 3", "Pergunta 4"], question:["Qual a boa?", "Tem açucar?", "Bolacha ou biscoito?", "Sorvete?"]}
        

    return (
        <div className="screen2">
            <div className="title">
                <img alt="" className="smallimg" src={logo}></img>
                <h1>ZapRecall</h1>
            </div>
            <ul className="deck">
            {deck.map((card, index, question) =>
                <li key={index} className="card active">
                    <div className="frontCard hidden">
                        <p>{card}</p>
                        <ion-icon className="questionIcon" name="play"></ion-icon>
                    </div>
                    <div className="backCard">
                        <div className="question">
                            <h3>{question}</h3>
                        </div>

                    </div>
                </li>)}
            </ul>
        </div>
    )
}