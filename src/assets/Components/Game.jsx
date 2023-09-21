/*ACA HACER TODAS LAS FUNCIONALIDADES*/
import { ClockPlayer } from './ClockPlayer';
import './ClockPlayer.css'
import { useEffect, useState } from "react";
import Swal from 'sweetalert2';



/*
import { ClockPlayer } from "./ClockPlayer";
import Swal from "sweetalert2";

const Reloj = ({ tiempo }) => {
  const formatoTiempo = (segundos) => {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;
    return `${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;
  };

  return (
    <div>
      <h2>Reloj</h2>
      <p>Tiempo restante: {formatoTiempo(tiempo)}</p>
    </div>
  );
};
const Reloj2 = ({ tiempo, cambiarReloj }) => {
  const formatoTiempo = (segundos) => {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;
    return `${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;
  };

  return (
    <div onClick={cambiarReloj}>
      <h2>Reloj 2 la gayastre</h2>
      <p>Tiempo restante: {formatoTiempo(tiempo)}</p>
    </div>
  );
};
*/


export const Game = () => {

    //Estados
    const [timerPlayer1, setTimerPlayer1] = useState(500)
    const [timerPlayer2, setTimerPlayer2] = useState(500)
    const [isPlaying, setIsPlaying] = useState(1)
    const [gameStart, setGameStart] = useState(false)

    console.log(timerPlayer1, timerPlayer2)
    //Funciones


   
    //   useEffect(() => {
    //     Swal.fire({
    //         title: 'Bienvenido',
    //         input: 'number',
    //         showCancelButton: true,
    //         confirmButtonText: 'Look up',
    //         showLoaderOnConfirm: true,
    //         preConfirm: (result) => {
    //             console.log(result)
    //         },
    //         allowOutsideClick: () => !Swal.isLoading()
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             Swal.fire({
    //                 text: 'Hola'
    //             })
    //         }
    //     })
    // }, [])

    useEffect(() => {
        let intervalo
        console.log(gameStart)
        if (gameStart === true) {
            if (timerPlayer1 > 0 && isPlaying == 1) {
                intervalo = setInterval(() => {
                    setTimerPlayer1((prevTimerPlayer1) => prevTimerPlayer1 - 1)
                }, 1000)
            } else {
                intervalo = setInterval(() => {
                    setTimerPlayer2((prevTimerPlayer2) => prevTimerPlayer2 - 1)
                }, 1000)
            }
            return () => {
                clearInterval(intervalo)
            }
        }
    }, [timerPlayer1, timerPlayer2])

    const startGame = () => {
        setGameStart(true)
    }

    const cambiarPlayer = () => {
        setIsPlaying((prevPlayer) => !prevPlayer)
        console.log(isPlaying)
    }
    return (
        <>
            <main className='game'>
                <ClockPlayer timer={timerPlayer1} cambiarPlayer={cambiarPlayer} player="1" isPlaying></ClockPlayer>
                <div className="optionButtons">
                    <button><i className="fa-solid fa-gear fa-xl"></i></button>
                    <button onClick={startGame}><i className="fa-solid fa-play fa-xl"></i></button>
                    <button><i className="fa-solid fa-rotate-right fa-xl"></i></button>
                </div>
                <ClockPlayer timer={timerPlayer2} cambiarPlayer={cambiarPlayer} player="2" isPlaying></ClockPlayer>
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

