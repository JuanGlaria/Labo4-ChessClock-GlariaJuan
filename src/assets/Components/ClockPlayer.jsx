import './ClockPlayer.css'

export const ClockPlayer = ({ timer, cambiarPlayer, player, cantMovimientoPlayer }) => {
    const formatoTiempo = (segundos) => {
        const minutos = Math.floor(segundos / 60);
        const segundosRestantes = segundos % 60;
        return `${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;
    };

    let iconoPlayer = null

    if (player == 1) {
        iconoPlayer = <i className="fa-solid fa-chess-queen fa-xl"></i>
    } else {
        iconoPlayer = <i className="fa-solid fa-chess-queen fa-xl" style={{ color: "#000000", }}></i>
    }

    return (
        <div className="clockPlayer" onClick={cambiarPlayer}>
            <p>{formatoTiempo(timer)}</p>
            <span>Movimientos: {cantMovimientoPlayer}</span>
            {iconoPlayer}
        </div >
    );
};
