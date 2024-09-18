import { useEffect, useState } from 'react'
import './Rotator.css'

function Rotator() {
  const [animate, setAnimate] = useState(false)
  const toggle = () => { setAnimate(v => !v) }
  useEffect(() => {
    window.addEventListener('click', toggle)
    return () => {
      window.removeEventListener('click', toggle)
    }
  }, [])

  const animateClass = animate ? '' : 'stop'
  return (
    <div className="container">
      <div className={`overlay blurred ${animateClass}`} />
      <div className="unblurdiv">
        <div className={`overlay ${animateClass}`} />
      </div>
    </div>
  )
}

export default Rotator
