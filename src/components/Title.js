import logo from "../assets/images/logo.png"

export default function Title() {
    return (
        <div className="title">
            <img alt="" className="smallimg" src={logo}></img>
            <h1>ZapRecall</h1>
        </div>
    )
}