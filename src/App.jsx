import { useState } from 'react'
import './App.css'
import { ClocksChess } from './assets/Components/ClocksChess'
function App() {
  // const Ref = useRef(null)

  const [timer, setTimer] = useState('00:00')

  return (
    <>
      <ClocksChess>

      </ClocksChess>
    </>
  )
}

export default App
