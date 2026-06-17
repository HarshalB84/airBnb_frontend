import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1 className='bg-red-500 text-white '>Hello</h1>    
  </StrictMode>,
)
