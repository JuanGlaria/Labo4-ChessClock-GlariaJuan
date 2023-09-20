/*ACA HACER TODAS LAS FUNCIONALIDADES*/
import { useRef, useState, useEffect } from "react";
import { ClockPlayer } from "./ClockPlayer";
import Swal from "sweetalert2";


export const Game = () => {

    let cantMovimientoPlayer1 = 0
    let cantMovimientoPlayer2 = 0
    // const [timer, setTimer] = useState("02:00")

    const [isPlaying, setIsPlaying] = useState(false)
    const [timerPlayer1, setTimerPlayer1] = useState(500)
    const delayRef = useRef(1000)

    // function getTimeRemaining(end) {
    //     const currDate = Date.now() / 1000;
    //     const minutesLeft = Math.floor((end - currDate) / 60);
    //     const secondsLeft = Math.floor((end - currDate) % 60);
    //     return { minutesLeft, secondsLeft };
    // }

    /*
            const Reloj = ({ tiempo }) => {
      const formatoTiempo = (segundos) => {
        const minutos = Math.floor(segundos / 60);
        const segundosRestantes = segundos % 60;
        return ${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes};
      };
    
      return (
        <div>
          <h2>Reloj</h2>
          <p>Tiempo restante: {formatoTiempo(tiempo)}</p>
        </div>
      );
};

export default Reloj;
    ----------------------------------------------

    import React, { useState, useEffect } from 'react';
import Reloj from './Reloj';

const App = () => {
  const [timer, setTimer] = useState(0); // El tiempo inicial del timer en segundos
  const [relojActivo, setRelojActivo] = useState(1); // Indica cuál reloj está activo (1 o 2)

  useEffect(() => {
    let intervalId;

    if (timer > 0) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [timer]);

  const cambiarReloj = () => {
    // Cambia al otro reloj (1 a 2 o 2 a 1)
    setRelojActivo(relojActivo === 1 ? 2 : 1);
  };

  const reiniciarReloj = () => {
    setTimer(0);
  };

  return (
    <div>
      <h1>Timer App</h1>
      <button onClick={cambiarReloj}>Cambiar Reloj</button>
      <button onClick={reiniciarReloj}>Reiniciar</button>
      {relojActivo === 1 ? <Reloj tiempo={timer} /> : null}
      {relojActivo === 2 ? <Reloj tiempo={timer} /> : null}
    </div>
  );
};

export default App;


    */

    console.log(timer)

    useEffect(() => {
        Swal.fire({
            title: 'Bienvenido',
            input: 'number',
            showCancelButton: true,
            confirmButtonText: 'Look up',
            showLoaderOnConfirm: true,
            preConfirm: (result) => {
                // setTimer(result)
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    text: 'Hola'
                })
            }
        })
    }, [])

    const handlePlayingClick = (player) => {
        console.log('Entro en handlePlayingClick')
        setIsPlaying(true)
        if (player == 1 && isPlaying == true) {
            // setContp1(1)
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

