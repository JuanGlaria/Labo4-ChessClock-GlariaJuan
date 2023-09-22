import './Modal.css'
import { createPortal } from "react-dom";
import Swal from 'sweetalert2';

export const Modal = ({ show, onCloseButtonClick, timeGameSettings }) => {
    if (!show) {
        return null
    }
    const habilitarValorIncremento = () => {
        
        let inputValorIncremento = document.getElementById('valorAumento')
        if (inputValorIncremento.disabled === true) {
            inputValorIncremento.disabled = false
        } else {
            inputValorIncremento.disabled = true
        }

    }
    const GuardarSettings = () => {
        let timeGameValue = document.getElementById('timePartida').value
        let valorIncrementValue = document.getElementById('valorAumento').value
        let conIncrementoValue = document.getElementById('partidaConIncremento').value
        
        console.log(`Modal conIncremetno =>  ${conIncrementoValue}`)
        let respuesta = Validar(timeGameValue, valorIncrementValue)
        if (respuesta.status === false) {
            Swal.fire({
                status: false,
                type: respuesta.type,
                icon: respuesta.icon,
                title: respuesta.title,
                text: respuesta.text,
            })
        } else {
            timeGameSettings(timeGameValue, conIncrementoValue, valorIncrementValue)
            onCloseButtonClick()
        }
    }

    function Validar(timeGameValue, valorIncrementValue) {
        
        let regexPattern = /^-?[0-9]+$/;
        let result = regexPattern.test(timeGameValue)
        console.log('validar regex ' + result)


        if(!result){
            return (
                {
                    status: false,
                    type: 'error',
                    icon: 'error',
                    title: 'Error!',
                    text: '¡Ingrese un valor entero positivo en tiempo de partida, inténtalo nuevamente!',
                }
            )
        }
        if (timeGameValue <= 0) {
            return (
                {
                    status: false,
                    type: 'error',
                    icon: 'error',
                    title: 'Error!',
                    text: '¡Ingrese un valor positivo en tiempo de partida, inténtalo nuevamente!',
                }
            )
        }
        if (timeGameValue > 60) {
            return (
                {
                    status: false,
                    type: 'error',
                    icon: 'error',
                    title: 'Error!',
                    text: '¡El tiempo no puede ser mayor a 60 min, inténtalo nuevamente!',
                }
            )
        }
        if (valorIncrementValue !== "") {
            if (valorIncrementValue <= 0) {
                return (
                    {
                        status: false,
                        type: 'error',
                        icon: 'error',
                        title: 'Error!',
                        text: '¡Ingrese un valor positivo en incremento , inténtalo nuevamente!',
                    }
                )
            }
            if (valorIncrementValue > 15) {
                return (
                    {
                        status: false,
                        type: 'error',
                        icon: 'error',
                        title: 'Error!',
                        text: '¡El incremento no puede ser mayor a 15, inténtalo nuevamente!',
                    }
                )
            }

        }
        return {
            status: true
        }
    }

    return createPortal(
        <div className="modal-wrapper" >
            <section className="modal">
                <header style={{ textAlign: 'center' }}>
                    <h2>Ajustes Partida</h2>
                </header>
                <main className='modal-main'>
                    <div className='div-modal-main modal-main-timeGame'>
                        <label htmlFor="timePartida">Tiempo de la partida</label>
                        <input type="number" id="timePartida" maxLength={2} />
                    </div>
                    <div className='div-modal-main modal-main-incrementClock'>
                        <label htmlFor="partidaConIncremento">Reloj con incremento</label>
                        <input className="partidaConIncremento-input" type="checkbox" id="partidaConIncremento" onChange={habilitarValorIncremento} />
                        <input className='valorAumentoInput' type="number" id='valorAumento' placeholder='Seg' disabled />

                    </div>
                </main>
                <footer>
                    <div className='footer-btnGroup'>
                        <button onClick={onCloseButtonClick} className='footer-btnGroup-btn footer-btnGroup-cerrar'>Cerrar</button>
                        <button className='footer-btnGroup-btn footer-btnGroup-guardar' onClick={GuardarSettings}>Guardar</button>
                    </div>
                </footer>
            </section>
        </div>,
        document.body
    )
}