import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import "./public/ANAIS.pdf"

import "./public/pdf/ANAIS.pdf"
import "./public/pdf/Antoine.pdf"
import "./public/pdf/Arthur.pdf"
import "./public/pdf/Corentin.pdf"
import "./public/pdf/Edouard.pdf"
import "./public/pdf/Quentin.pdf"
import "./public/pdf/Samir.pdf"
import "./public/pdf/Soren.pdf"
import "./public/pdf/Thibault.pdf"
import "./public/pdf/Youssef.pdf"

document.querySelector('#app').innerHTML = `
  <div>
    <a href="./pdf/ANAIS.pdf">a</a>
  </div>
`

setupCounter(document.querySelector('#counter'))
