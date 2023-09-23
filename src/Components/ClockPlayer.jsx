import './ClockPlayer.css'

export const ClockPlayer1 = ({ timer, cambiarPlayer, isPlaying, cantMovimientoPlayer1, timerGlobal }) => {
    let twintyPercent = timerGlobal / 100 * 20
    
    const formatoTiempo = (segundos) => {
        const minutos = Math.floor(segundos / 60);
        const segundosRestantes = segundos % 60;
        return `${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;
    };
    let iconoPlayer = <i className="fa-solid fa-chess-queen fa-xl"></i>

    return (
        <div className={'clockPlayer'} onClick={cambiarPlayer} style={isPlaying === 1 ? { background: '#ffab57' } : {}}>
            <p style={twintyPercent > timer ? { color: '#FF0000' } : {}}>{formatoTiempo(timer)}</p>
            <span>Movimientos: {cantMovimientoPlayer1}</span>
            {iconoPlayer}
        </div >
    );
};


export const ClockPlayer2 = ({ timer, cambiarPlayer, isPlaying, cantMovimientoPlayer2, timerGlobal }) => {
    let twintyPercent = timerGlobal / 100 * 20
    
    const formatoTiempo = (segundos) => {
        const minutos = Math.floor(segundos / 60);
        const segundosRestantes = segundos % 60;
        return `${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;
    };
    let iconoPlayer = <i className="fa-solid fa-chess-queen fa-xl" style={{ color: "#000000", }}></i>
    
    return (
        <div className={'clockPlayer'} style={isPlaying === 2 ? { background: '#ffab57' } : {}} onClick={cambiarPlayer} >
            <p style={twintyPercent > timer ? { color: '#FF0000' } : {}}>{formatoTiempo(timer)}</p>
            <span>Movimientos: {cantMovimientoPlayer2}</span>
            {iconoPlayer}
        </div >
    );
};