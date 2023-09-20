/*ACA HACER TODAS LAS FUNCIONALIDADES*/
import './ClockPlayer.css'
import { useState, useEffect } from "react";
// import { ClockPlayer } from "./ClockPlayer";
// import Swal from "sweetalert2";

// const Reloj = ({ tiempo }) => {
//   const formatoTiempo = (segundos) => {
//     const minutos = Math.floor(segundos / 60);
//     const segundosRestantes = segundos % 60;
//     return `${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;
//   };

//   return (
//     <div>
//       <h2>Reloj</h2>
//       <p>Tiempo restante: {formatoTiempo(tiempo)}</p>
//     </div>
//   );
// };
// const Reloj2 = ({ tiempo, cambiarReloj }) => {
//   const formatoTiempo = (segundos) => {
//     const minutos = Math.floor(segundos / 60);
//     const segundosRestantes = segundos % 60;
//     return `${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;
//   };

//   return (
//     <div onClick={cambiarReloj}>
//       <h2>Reloj 2 la gayastre</h2>
//       <p>Tiempo restante: {formatoTiempo(tiempo)}</p>
//     </div>
//   );
// };


export const Game = () => {
  const [timer, setTimer] = useState(0)
  setTimer(500)
  useEffect(() => {
    setInterval(
      setTimer((prevTimer) => {
      prevTimer - 1
    }),1000)
    
  }, [timer])



  const ClockPlayer = ({ timer }) => {
    // player, timer, cantMovimientos, isPlaying 
    // let iconoPlayer = null
    // if (player == 1) {
    //     iconoPlayer = <i className="fa-solid fa-chess-queen fa-xl"></i>
    // } else {
    //     iconoPlayer = <i className="fa-solid fa-chess-queen fa-xl" style={{color: "#000000",}}></i>
    // }

    // return (
    //     <div className="clockPlayer" style={{backgroundColor: isPlaying ? '#7AFF33' : '#3f3f3f'}} >
    //             <p>{timer}</p>
    //             <span>Movimientos: {cantMovimientos}</span>
    //         {iconoPlayer}
    //     </div>
    // )
    <div>
      <p>{timer}</p>
    </div>
}

  return(
    <>
      <ClockPlayer timer={timer}></ClockPlayer>
      <ClockPlayer></ClockPlayer>
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

