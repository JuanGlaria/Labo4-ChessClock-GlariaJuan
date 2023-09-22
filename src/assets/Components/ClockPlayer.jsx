import './ClockPlayer.css'

export const ClockPlayer1 = ({ timer, cambiarPlayer, cantMovimientoPlayer1 }) => {
    console.log('timer del componente ' + timer)
    const formatoTiempo = (segundos) => {
        const minutos = Math.floor(segundos / 60);
        const segundosRestantes = segundos % 60;
        return `${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;
    };

    let iconoPlayer = <i className="fa-solid fa-chess-queen fa-xl"></i>


    return (
        <div className="clockPlayer" onClick={cambiarPlayer} >
            <p>{formatoTiempo(timer)}</p>
            <span>Movimientos: {cantMovimientoPlayer1}</span>
            {iconoPlayer}
        </div >
    );
};


export const ClockPlayer2 = ({ timer, cambiarPlayer, cantMovimientoPlayer2 }) => {
    const formatoTiempo = (segundos) => {
        const minutos = Math.floor(segundos / 60);
        const segundosRestantes = segundos % 60;
        return `${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;
    };

    let iconoPlayer = <i className="fa-solid fa-chess-queen fa-xl" style={{ color: "#000000", }}></i>


    return (
        <div className="clockPlayer" onClick={cambiarPlayer} >
            <p>{formatoTiempo(timer)}</p>
            <span>Movimientos: {cantMovimientoPlayer2}</span>
            {iconoPlayer}
        </div >
    );
};