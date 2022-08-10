import { useState } from 'react'
import './App.css'
import {ButtonSize} from './components/ButtonSize/ButtonSize'

function App() {
  const [currentSize, setCurrentSize] = useState('none')

  return (
    <div className="App">
      <h2>Talla seleccionada: {currentSize}</h2>
      <ButtonSize onSizeChange={ setCurrentSize } selectedSize={currentSize} />
    </div>
  )
}

export default App
