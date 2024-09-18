import { useState } from 'react'
import Rotator from './Rotator'
import './App.css'

const App = () => {
  const [showBg, setShowBg] = useState(true)
  const [bgOpacity, setBgOpacity] = useState(0.3)
  const [xScaleFactor, setXScaleFactor] = useState(0.6)
  const [yScaleFactor, setYScaleFactor] = useState(1)
  const [time, setTime] = useState(7)
  return (
    <div>
      <div>
        <div className="field">
          <span>Показать задник</span>
          <input type="checkbox" value={showBg} onChange={() => { setShowBg(v => !v)}}/>
        </div>
        <div className="field">
          <span>Размытость задника</span>
          <input type="number" min={0} max={1} step={0.1} value={bgOpacity} onChange={(e) => { setBgOpacity(e.target.value)}}/>
        </div>
        <div className="field">
          <span>Сжатие по X</span>
          <input type="number" step={0.1} value={xScaleFactor} onChange={e => { setXScaleFactor(e.target.value)}}/>
        </div>
        <div className="field">
          <span>Сжатие по Y</span>
          <input type="number" step={0.1} value={yScaleFactor} onChange={e => { setYScaleFactor(e.target.value)}}/>
        </div>
        <div className="field">
          <span>Время оборота</span>
          <input type="number" step={1} value={time} onChange={e => { setTime(e.target.value)}} />
        </div>
      </div>
      <Rotator />
    </div>
  )
}

export default App
