import React from 'react'
import ReactDom from 'react-dom'

import App from './views'

const parent = document.createElement('div')

parent.style.height='100%'
document.body.appendChild(parent)

ReactDom.render(<App />, parent)
