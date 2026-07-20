import React from 'react'
import Router from './router'
import { Toaster } from '@/components/ui/sonner'

const App = () => {
  return (
    <>
      <Router />
      <Toaster richColors/>
    </>
  )
}

export default App