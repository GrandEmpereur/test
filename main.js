import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

import "/pdf/ANAIS.pdf"
import "/pdf/Antoine.pdf"
import "/pdf/Arthur.pdf"
import "/pdf/Corentin.pdf"
import "/pdf/Edouard.pdf"
import "/pdf/Quentin.pdf"
import "/pdf/Samir.pdf"
import "/pdf/Soren.pdf"
import "/pdf/Thibault.pdf"
import "/pdf/Youssef.pdf"

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev/" target="_blank">
      <img src="${viteLogo}" alt="Vite Logo" width="120" />
    </a>

    <h1>Hello Vite!</h1>
    <a href="./public/pdf/ANAIS.pdf" target="_blank">ANAIS</a>
  </div>
`

setupCounter(document.querySelector('#counter'))
