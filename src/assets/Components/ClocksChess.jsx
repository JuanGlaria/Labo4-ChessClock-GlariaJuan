import { PlayerClock } from "./playerclock"


/*
    <i class="fa-solid fa-play"></i> => icono play
    <i class="fa-solid fa-pause"></i> => icono pausa

*/

export const ClocksChess  = () => {
    return (
        <div className="container">
            <PlayerClock></PlayerClock>
            <div className="optionButtonGroup">
                <button className="optionButtonGroup-botonOption"><i class="fa-solid fa-gear"></i></button>
                <button className="optionButtonGroup-botonOption"><i class="fa-solid fa-play"></i></button>
                <button className="optionButtonGroup-botonOption"><i class="fa-solid fa-rotate-right"></i></button>
            </div>
            <PlayerClock></PlayerClock>
        </div>
    )

}