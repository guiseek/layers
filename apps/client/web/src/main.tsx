import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './app/app'

const rootEl = document.querySelector('#root')
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl)
  root.render(
    <StrictMode>
      <BrowserRouter>
        <App title="" />
      </BrowserRouter>
    </StrictMode>
  )
}
