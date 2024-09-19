import { useState } from 'react'
import Rotator from './Rotator'
import './App.css'

const App = () => {
  const [showBg, setShowBg] = useState(false)
  const [bgOpacity, setBgOpacity] = useState(0.3)
  const [xScaleFactor, setXScaleFactor] = useState(1)
  const [yScaleFactor, setYScaleFactor] = useState(1)
  const [time, setTime] = useState(6)

  const [showShadow, setShowShadow] = useState(false)
  const [showOnlyShadow, setShowOnlyShadow] = useState(false)
  const [hideEraser, setHideEraser] = useState(false)

  const [imageWidth, setImageWidth] = useState(130)
  const [imageHeight, setImageHeight] = useState(130)

  const [buttonWidth, setButtonWidth] = useState(120)
  const [buttonHeight, setButtonHeight] = useState(60)

  const [hideText, setHideText] = useState(false)

  return (
    <div>
      <div className="panel">
        <div className="field">
          <span>Показать задник</span>
          <input type="checkbox" checked={showBg} onChange={() => { setShowBg(v => !v)}}/>
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

        <div className="field">
          <span>Длина задника</span>
          <input type="number" step={10} value={imageWidth} onChange={e => { setImageWidth(e.target.value)}} />
        </div>
        <div className="field">
          <span>Высота задника</span>
          <input type="number" step={10} value={imageHeight} onChange={e => { setImageHeight(e.target.value)}} />
        </div>
        <div className="field">
          <span>Длина кнопки</span>
          <input type="number" step={10} value={buttonWidth} onChange={e => { setButtonWidth(e.target.value)}} />
        </div>
        <div className="field">
          <span>Высота кнопки</span>
          <input type="number" step={10} value={buttonHeight} onChange={e => { setButtonHeight(e.target.value)}} />
        </div>

        <div className="field third">
          <span>Показать "тень"</span>
          <input type="checkbox" checked={showShadow} onChange={() => { setShowShadow(v => !v)}}/>
        </div>
        <div className="field third">
          <span>Скрыть всё кроме "тени"</span>
          <input type="checkbox" checked={showOnlyShadow} onChange={() => { setShowOnlyShadow(v => !v)}}/>
        </div>
        <div className="field third">
          <span>Скрыть "вырез"</span>
          <input type="checkbox" checked={hideEraser} onChange={() => { setHideEraser(v => !v)}}/>
        </div>
        <div className="field third">
          <span>Скрыть текст</span>
          <input type="checkbox" checked={hideText} onChange={() => { setHideText(v => !v)}}/>
        </div>
      </div>
      <div className="field">Кликните ниже, чтобы запустить/остановить анимацию</div>
      <Rotator
         showBg={showBg}
         bgOpacity={bgOpacity}
         xScaleFactor={xScaleFactor}
         yScaleFactor={yScaleFactor}
         time={time}
         showShadow={showShadow}
         showOnlyShadow={showOnlyShadow}
         hideEraser={hideEraser}
         imageWidth={imageWidth}
         imageHeight={imageHeight}
         buttonWidth={buttonWidth}
         buttonHeight={buttonHeight}
         hideText={hideText}
      />
    </div>
  )
}

export default App
