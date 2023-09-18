/*ACA HACER TODAS LAS FUNCIONALIDADES*/
import { ClockPlayer } from "./ClockPlayer";


export const Game = () => {
    return (
        <>
            <div className="game">
                <ClockPlayer player='Blancas'></ClockPlayer>
                <div className="optionButtons">
                    <button>Ajustes</button>
                    <button>pausar</button>
                    <button>Reiniciar</button>
                </div>
                <ClockPlayer player='Negras'></ClockPlayer>
            </div>
        </>
    )
}


ClockPlayer