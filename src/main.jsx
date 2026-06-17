import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Button } from './components/ui/button'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='dark'>
      <h1 className='bg-background text-foreground'>Hello</h1>
      <Button>Click Me</Button>
    </div>

  </StrictMode>,
)
