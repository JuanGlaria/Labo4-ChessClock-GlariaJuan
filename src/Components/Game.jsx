/*ACA HACER TODAS LAS FUNCIONALIDADES*/
import './ClockPlayer.css'
import { ClockPlayer1, ClockPlayer2 } from './ClockPlayer';
import { useEffect, useState } from "react";
import { useModal } from './useModal';
import Swal from 'sweetalert2';
import { Modal } from './Modal'




export const Game = () => {

    //Estados
    const [timerPlayer1, setTimerPlayer1] = useState(0)
    const [timerPlayer2, setTimerPlayer2] = useState(0)
    const [timerGlobal, setTimerGlobal] = useState(0)
    const [valorIncrement, setValorIncrement] = useState(0)
    const [cantMovimientoPlayer1, setCantMovimientoPlayer1] = useState(0)
    const [cantMovimientoPlayer2, setCantMovimientoPlayer2] = useState(0)
    const [isPlaying, setIsPlaying] = useState(1)
    const [gameStart, setGameStart] = useState(false)
    const { isShowing, toggle } = useModal();


    //Funciones

    useEffect(() => {
        let intervalo
        if (gameStart === true) {
            if (timerPlayer1 > 0 && isPlaying == 1) {
                intervalo = setInterval(() => {
                    setTimerPlayer1((prevTimerPlayer1) => prevTimerPlayer1 - 1)
                }, 1000)
            }
            if (timerPlayer2 > 0 && isPlaying == 2) {
                intervalo = setInterval(() => {
                    setTimerPlayer2((prevTimerPlayer2) => prevTimerPlayer2 - 1)
                }, 1000)
            }
            if (timerPlayer2 == 0) {
                return (
                    Ganador('blancas')

                )
            }
            if (timerPlayer1 == 0) {
                return (
                    Ganador('negras')
                )
            }
            return () => {
                clearInterval(intervalo)
            }
        }
    }, [timerPlayer1, timerPlayer2, gameStart])


    const Ganador = (ganador) => {
        if (ganador === 'blancas') {
            resetGame()
            Swal.fire({
                title: 'Ganador Blancos!',
                imageUrl: '/img/winnerBlancas.jpg',
                imageWidth: 300,
                imageHeight: 350,
                imageAlt: 'Ganador Blancos',
                timer: 5000,
            })
        }
        if (ganador === 'negras') {
            resetGame()
            Swal.fire({
                title: 'Ganador Negras',
                imageUrl: '/img/winnerNegras.jpg',
                imageWidth: 400,
                imageHeight: 400,
                imageAlt: 'Ganador Negras',
                timer: 5000,
            })
        }
    }


    const timeGameSettings = (timeGameValue, valorIncrementValue) => {
        setTimerGlobal(timeGameValue * 60)
        setValorIncrement(valorIncrementValue)
        setTimerPlayer1(timeGameValue * 60)
        setTimerPlayer2(timeGameValue * 60)
    }

    const startGame = () => {
        if (timerPlayer1 == 0) {
            setTimerPlayer1(10 * 60)
            setTimerPlayer2(10 * 60)
        }
        setGameStart((gameStart) => !gameStart)
    }

    const resetGame = () => {
        setTimerPlayer1(timerGlobal)
        setTimerPlayer2(timerGlobal)
        setCantMovimientoPlayer1(0)
        setCantMovimientoPlayer2(0)
        setIsPlaying(1)
        setGameStart(false)
    }

    const cambiarPlayer = () => {
        if (isPlaying === 1 && gameStart === true) {
            setIsPlaying(2)
            setCantMovimientoPlayer1(cantMovimientoPlayer1 + 1)
            if (valorIncrement !== "") {
                let parseValorIncrement = parseInt(valorIncrement)
                setTimerPlayer1(timerPlayer1 + parseValorIncrement)
            } else {
                setTimerPlayer1(timerPlayer1 + 0)
            }
        }
        if (isPlaying === 2 && gameStart === true) {
            setIsPlaying(1)
            setCantMovimientoPlayer2(cantMovimientoPlayer2 + 1)
            if (valorIncrement !== "") {
                let parseValorIncrement = parseInt(valorIncrement)
                setTimerPlayer2(timerPlayer2 + parseValorIncrement)
            } else {
                setTimerPlayer2(timerPlayer2 + 0)
            }
        }
    }

    return (
        <>
            <Modal show={isShowing} onCloseButtonClick={toggle} timeGameSettings={timeGameSettings}></Modal>
            <main className='game'>
                <ClockPlayer1
                    timer={timerPlayer1}
                    cambiarPlayer={cambiarPlayer}
                    player={1}
                    isPlaying={isPlaying}
                    cantMovimientoPlayer1={cantMovimientoPlayer1}
                    timerGlobal={timerGlobal}>
                </ClockPlayer1>
                <div className="optionButtons">
                    <button onClick={toggle}><i className="fa-solid fa-gear fa-xl"></i></button>
                    <button onClick={startGame}>{gameStart ? <i className="fa-solid fa-pause fa-xl"></i> : <i className="fa-solid fa-play fa-xl"></i>}</button>
                    <button onClick={resetGame}><i className="fa-solid fa-rotate-right fa-xl"></i></button>
                </div>
                <ClockPlayer2
                    timer={timerPlayer2}
                    cambiarPlayer={cambiarPlayer}
                    player={2}
                    isPlaying={isPlaying}
                    cantMovimientoPlayer2={cantMovimientoPlayer2}
                    timerGlobal={timerGlobal}>
                </ClockPlayer2>
            </main>
        </>
    )
};
