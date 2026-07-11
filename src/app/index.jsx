import React from 'react'
import Home from './home'
import Header from '@/components/layouts/Header.Layout'
import Footer from '@/components/layouts/Footer.Layout'
import HotelDetails from './hotel-details'
import { SignInPage, SignUpPage } from './auth'
import SearchPage from './search/SearchPage'

const App = () => {
  return (
    <div>
      <Header />
      {/* <Home /> */}
      {/* <HotelDetails /> */}
      {/* <SignInPage /> */}
      {/* <SignUpPage /> */}
      <SearchPage />
      <Footer />
    </div>
  )
}

export default App