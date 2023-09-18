
import './ClockPlayer.css'



export const ClockPlayer = ({ player, time, cantMovimientos, isPlaying }) => {
    let iconoPlayer = null
    if (player == 1) { 
        iconoPlayer = <i className="fa-solid fa-chess-queen fa-xl"></i>
    } else {
        iconoPlayer = <i className="fa-solid fa-chess-queen fa-xl" style={{color: "#000000",}}></i>
    }

    return (
        <div className="clockPlayer" style={{backgroundColor: isPlaying ? '#7AFF33' : '#3f3f3f'}} >
                <p>{time}</p>
                <span>Movimientos: {cantMovimientos}</span>
            {iconoPlayer}
        </div>
    )
}