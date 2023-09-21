import { useState, useEffect } from 'react';
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


const Game2 = () => {
    useEffect(() => {
        Swal.fire({
            title: 'Bienvenido',
            input: 'number',
            showCancelButton: true,
            confirmButtonText: 'Look up',
            showLoaderOnConfirm: true,
            preConfirm: (result) => {
                setTimerGlobal(result)
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                // Swal.fire({
                //     text: 'Hola'
                // })
            }
            console.log('hola')
        })
    }, [])

    const [timerGlobal, setTimerGlobal] = useState(30000)
    const [timer, setTimer] = useState(timerGlobal);
    const [timer2, setTimer2] = useState(timerGlobal);
    const [relojActivo, setRelojActivo] = useState(false); // Indica cuál reloj está activo (1 o 2)

    useEffect(() => {
        let intervalId;

        if (timer > 0 && relojActivo) {
            intervalId = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else {
            intervalId = setInterval(() => {
                setTimer2((prevTimer) => prevTimer - 1);
            }, 1000);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [timer, timer2]);

    const cambiarReloj = () => {
        // Cambia al otro reloj (1 a 2 o 2 a 1)
        setRelojActivo((prevReloj) => !prevReloj);
        console.log(relojActivo)
    };

    const reiniciarReloj = () => {
        setTimer(0);
    };

    return (
        <div>
            <h1>Timer App</h1>
            <button onClick={cambiarReloj}>Cambiar Reloj</button>
            <button onClick={reiniciarReloj}>Reiniciar</button>
            <div style={{ display: 'flex', gap: '10' }}>
                <Reloj tiempo={timer} setTimer={setTimer} cambiarReloj={cambiarReloj} />
                <Reloj2 tiempo={timer2} cambiarReloj={cambiarReloj} />
            </div>
        </div>
    );
};

export default Game2;
