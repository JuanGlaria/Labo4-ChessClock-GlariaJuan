/*ACA HACER TODAS LAS FUNCIONALIDADES*/
import { useRef, useState } from "react";
import { ClockPlayer } from "./ClockPlayer";



export const Game = () => {
    let cantMovimientoPlayer1 = 0
    let cantMovimientoPlayer2 = 0
    const [isPlaying, setIsPlaying] = useState(false)
    const [timerPlayer1, setTimerPlayer1] = useState(500)
    const delayRef = useRef(1000)
    // const [cantMovimientos, setCantMovimientos] = useState(0)

    console.log(`${isPlaying} + ${timerPlayer1} + ${delayRef}`)

    const handlePlayingClick = (player) => {
        console.log('Entro en handlePlayingClick')
        setIsPlaying(true)
        if (player == 1 && isPlaying == true) {
            cantMovimientoPlayer1 += 1
            setInterval(() => {
                setTimerPlayer1(timerPlayer1 - 1)
            }, delayRef)
        } else {
            cantMovimientoPlayer2 += 1
        }
        /*
            En esta funcion tengo que hacer que cambie 
            *color el fondo
            *funcione el reloj
            *Sume los movimientos
        */
        
    }

    return (
        <>
            <div className="game">
                <ClockPlayer
                    player='1'
                    time={timerPlayer1}
                    cantMovimientos={cantMovimientoPlayer1}
                    onChange={handlePlayingClick}
                />
                <div className="optionButtons">
                    <button><i className="fa-solid fa-gear fa-xl"></i></button>
                    <button><i className="fa-solid fa-play fa-xl"></i></button>
                    <button><i className="fa-solid fa-rotate-right fa-xl"></i></button>
                </div>
                <ClockPlayer
                    player='2'
                    time='5:00'
                    cantMovimientos={cantMovimientoPlayer2}
                    isPlaying={handlePlayingClick}
                />
            </div>
        </>
    )
}

