
function FooterIcons(props){
    return (
        <>
        <div className={props.f.class}>
            <ion-icon className={props.f.class} name={props.f.name}></ion-icon>
        </div>
        </>
    )
}

function FooterData(props) {


    return (
        <>
            <p onClick={console.log(props.footerData)}>{props.countAnswer}/4 CONCLUIDOS</p>
            <div className="footerIcons">
                {props.footerData.map((f) => {  
                        return <FooterIcons f={f} countAnswer={props.countAnswer} footerData={props.footerData} />

                    })}
            </div>
        </>      
    )
}

function Congrats() {
    return (
        <div className="parabens">
            <p>PARABEINS :D</p>
        </div>
    )
}

function TryAgain() {
    return (
        <div className="tryagain">
            <p>TENTE NOVAMENTE D:</p>
        </div>
    )
}


export default function Footeer(props) {

    
    return (
        <div>
            <div className="footer">
                {props.noError ? <Congrats />
                : !props.noError ? <TryAgain />
                :  <div></div>            
            }
                <FooterData countAnswer={props.countAnswer} footerData={props.footerData} />
            </div>
        </div>
    )
}
// {deckdata.map((d) => {
//     return <Cards countAnswer={props.countAnswer} setCountAnswer={props.setCountAnswer} footerData={props.footerData} setFooterData={props.setFooterData} d={d} />;
//   })}