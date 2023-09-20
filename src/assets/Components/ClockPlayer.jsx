
import './ClockPlayer.css'

export const ClockPlayer = ({ tiempo, cambiarPlayer, tiempoInicial }) => {
    // tiempo, cambiarPlayer, tiempoInicial
    console.log(tiempo + ' - ' + cambiarPlayer + ' - ' + tiempoInicial)
    const formatoTiempo = (segundos) => {
        const minutos = Math.floor(segundos / 60);
        const segundosRestantes = segundos % 60;
        return `${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;
    };

    let iconoPlayer = null
    let player = 1
    if (player == 1) {
        iconoPlayer = <i className="fa-solid fa-chess-queen fa-xl"></i>
    } else {
        iconoPlayer = <i className="fa-solid fa-chess-queen fa-xl" style={{ color: "#000000", }}></i>
    }

    return (
        <div className="clockPlayer" onClick={cambiarPlayer} style={{ backgroundColor: player ? '#7AFF33' : '#3f3f3f' }} >
            <p>Tiempo restante: {formatoTiempo(tiempo)}</p>
            <span>Movimientos: 0</span>
            {iconoPlayer}
        </div >
    );
};

{/* <div className='clockPlayer' onClick={cambiarPlayer}>
            <h2>Reloj</h2>
            <p>Tiempo restante: {formatoTiempo(tiempo)}</p>
        </div> */}



// export const ClockPlayer = ({ player, time, cantMovimientos, isPlaying }) => {
//     let iconoPlayer = null
//     if (player == 1) {
//         iconoPlayer = <i className="fa-solid fa-chess-queen fa-xl"></i>
//     } else {
//         iconoPlayer = <i className="fa-solid fa-chess-queen fa-xl" style={{color: "#000000",}}></i>
//     }

//     return (
//         <div className="clockPlayer" style={{backgroundColor: isPlaying ? '#7AFF33' : '#3f3f3f'}} >
//                 <p>{time}</p>
//                 <span>Movimientos: {cantMovimientos}</span>
//             {iconoPlayer}
//         </div>
//     )
// }