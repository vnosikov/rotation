import { useState } from 'react'
import './Rotator.css'

function Rotator({
  showBg,
  bgOpacity,
  xScaleFactor,
  yScaleFactor,
  time,
  showShadow,
  showOnlyShadow,
  hideEraser,
  imageWidth,
  imageHeight,
  buttonWidth,
  buttonHeight,
  hideText
}) {
  const [animate, setAnimate] = useState(true)
  const toggle = () => { setAnimate(v => !v) }

  const animateClass = animate ? '' : 'stop'

  const style = {
    '--opacity': !showBg ? 0 : bgOpacity,
    '--xScale': xScaleFactor,
    '--yScale': yScaleFactor,
    '--animation-time': `${time}s`,
    '--imageWidth': `${imageWidth}px`,
    '--imageHeight': `${imageHeight}px`,
    '--buttonWidth': `${buttonWidth}px`,
    '--buttonHeight': `${buttonHeight}px`
  }
  return (
    <div style={style} className="wrapper" onClick={toggle}>
      <div className="container">
        {showShadow && (
          <div className="shadow shadow1">
            <div className={`shadow shadow2 ${animateClass}`}/>
          </div>
        )}
        {!showOnlyShadow && (
          <>
            <div className={`overlay blurred ${animateClass}`} />
            <div className="unblurdiv">
              <div className={`overlay ${animateClass}`} />
            </div>
            {!hideEraser && <div className="eraser"></div>}
            {!hideText && <span className="text">ПРИВЕТ</span>}
          </>
        )}
      </div>
    </div>
  )
}

export default Rotator
