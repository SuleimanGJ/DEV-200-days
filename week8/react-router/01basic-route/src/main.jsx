import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './LinkRoute.jsx'
import LinkRoute from './LinkRoute.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <LinkRoute />
  </StrictMode>,
)
