import React from 'react'
import ReactDOM from 'react-dom'
import './popup.css'
import { Button } from 'antd'

const App: React.FC<{}> = () => {
  return (
    <div className='popup-wrapper'>
      <div className="popup-header">
        <img src="icon.png" />
        <span>OPR Tool</span>
      </div>
      <div className="popup-content">
        <div className="popup-content-icon">
          {/* <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <rect width="32" height="32" fill="url(#pattern0)" />
            <defs>
              <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0_7745_171057" transform="scale(0.0192308)" />
              </pattern>
              <image id="image0_7745_171057" width="52" height="52" xlink:href="data:image/png;base64,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" />
            </defs>
          </svg> */}
        </div>
        <div className="popup-content-text">
          Record performance by name: Vicky
        </div>
      </div>
      <div className="popup-btn">
        <Button type='primary'>Verify Account</Button>
      </div>
    </div>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(<App />, root)
