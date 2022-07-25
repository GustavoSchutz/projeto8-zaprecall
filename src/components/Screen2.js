
import Title from "./Title";
import Deck from "./Deck";

export default function Screen2(props) {


    return (
        <div className={props.changeDisplayScreen2}>
            <Title />
            <Deck />
        </div>
    )
}