/*ACA HACER TODAS LAS FUNCIONALIDADES*/
import './ClockPlayer.css'
import { ClockPlayer1, ClockPlayer2 } from './ClockPlayer';
import { Modal } from './modal';
import { useEffect, useState } from "react";
import { useModal } from './useModal';
import Swal from 'sweetalert2';


export const Game = () => {

    //Estados
    const [timerPlayer1, setTimerPlayer1] = useState(0)
    const [timerPlayer2, setTimerPlayer2] = useState(0)
    const [timerGlobal, setTimerGlobal] = useState(0)
    const [valorIncrement, setValorIncrement] = useState(0)
    const [conIncremento, setConIncremento] = useState(0)
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
                console.log(timerPlayer1)
            } else {
                intervalo = setInterval(() => {
                    setTimerPlayer2((prevTimerPlayer2) => prevTimerPlayer2 - 1)
                }, 1000)
                console.log(timerPlayer2)
            }
            if (timerPlayer2 == 0) {
                resetGame()
                return (
                    Swal.fire({
                        title: 'Sweet!',
                        text: 'Modal with a custom image.',
                        imageUrl: '../../../public/img/winnerBlancas.jpg',
                        imageWidth: 200,
                        imageHeight: 400,
                        imageAlt: 'Ganador Blancos',
                    })
                )
            }
            if (timerPlayer1 == 0) {
                resetGame()
                return (
                    Swal.fire({
                        title: 'Sweet!',
                        text: 'Modal with a custom image.',
                        imageUrl: '../../../public/img/winnerNegras.jpg',
                        imageWidth: 200,
                        imageHeight: 400,
                        imageAlt: 'Ganador Negras',
                    })
                )
            }
            return () => {
                clearInterval(intervalo)
            }
        }
    }, [timerPlayer1, timerPlayer2, gameStart])


    const timeGameSettings = (timeGameValue, conIncrementoValue, valorIncrementValue) => {
        setTimerGlobal(timeGameValue * 60)
        setConIncremento(conIncrementoValue)
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
        console.log('*******')
        console.log(typeof (conIncremento))
        console.log(typeof (valorIncrement))
        console.log('*******')

        if (isPlaying === 1) {
            setIsPlaying(2)
            setCantMovimientoPlayer1(cantMovimientoPlayer1 + 1)
            if (conIncremento === 'on') {
                let parseValorIncrement = parseInt(valorIncrement)
                setTimerPlayer1(timerPlayer1 + parseValorIncrement)
            }
        } else {
            setIsPlaying(1)
            setCantMovimientoPlayer2(cantMovimientoPlayer2 + 1)
            if (conIncremento === 'on') {
                let parseValorIncrement = parseInt(valorIncrement)
                setTimerPlayer2(timerPlayer2 + parseValorIncrement)
            }

        }
    }
    return (
        <>
            <Modal show={isShowing} onCloseButtonClick={toggle} timeGameSettings={timeGameSettings}></Modal>
            <main className='game'>
                <ClockPlayer1 timer={timerPlayer1} cambiarPlayer={cambiarPlayer} cantMovimientoPlayer1={cantMovimientoPlayer1} ></ClockPlayer1>
                <div className="optionButtons">
                    <button onClick={toggle}><i className="fa-solid fa-gear fa-xl"></i></button>
                    <button onClick={startGame}>{gameStart ? <i className="fa-solid fa-pause fa-xl"></i> : <i className="fa-solid fa-play fa-xl"></i>}</button>
                    <button onClick={resetGame}><i className="fa-solid fa-rotate-right fa-xl"></i></button>
                </div>
                <ClockPlayer2 timer={timerPlayer2} cambiarPlayer={cambiarPlayer} cantMovimientoPlayer2={cantMovimientoPlayer2} ></ClockPlayer2>
            </main>
        </>
    )
};












/* <button onClick={cambiarReloj}>Cambiar Reloj</button> */
/* <button onClick={reiniciarReloj}>Reiniciar</button> */
/* <div style={{ display: 'flex', gap: '10' }}><Reloj tiempo={timer} setTimer={setTimer} cambiarReloj={cambiarReloj} />
        <Reloj2 tiempo={timer2} cambiarReloj={cambiarReloj} /></div> */



// export const Game = () => {
//     useEffect(() => {
//         Swal.fire({
//             title: 'Bienvenido',
//             input: 'number',
//             showCancelButton: true,
//             confirmButtonText: 'Look up',
//             showLoaderOnConfirm: true,
//             preConfirm: (result) => {
//                 // setTimer(result)
//             },
//             allowOutsideClick: () => !Swal.isLoading()
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 Swal.fire({
//                     text: 'Hola'
//                 })
//             }
//         })
//     }, [])

//     const handlePlayingClick = (player) => {
//         console.log('Entro en handlePlayingClick')
//         setIsPlaying(true)
//         if (player == 1 && isPlaying == true) {
//             // setContp1(1)
//             setInterval(() => {
//                 setTimerPlayer1(timerPlayer1 - 1)
//             }, delayRef)
//         } else {
//             cantMovimientoPlayer2 += 1
//         }
//         /*
//             En esta funcion tengo que hacer que cambie
//             *color el fondo
//             *funcione el reloj
//             *Sume los movimientos
//         */

//     }

//     return (
//         <>
//             <div className="game">
//                 <ClockPlayer
//                     player='1'
//                     time={timerPlayer1}
//                     cantMovimientos={cantMovimientoPlayer1}
//                     onChange={handlePlayingClick}
//                 />
//                 <div className="optionButtons">
//                     <button><i className="fa-solid fa-gear fa-xl"></i></button>
//                     <button><i className="fa-solid fa-play fa-xl"></i></button>
//                     <button><i className="fa-solid fa-rotate-right fa-xl"></i></button>
//                 </div>
//                 <ClockPlayer
//                     player='2'
//                     time='5:00'
//                     cantMovimientos={cantMovimientoPlayer2}
//                     isPlaying={handlePlayingClick}
//                 />
//             </div>
//         </>
//     )
// }

