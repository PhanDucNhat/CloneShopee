import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner.jsx'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Header/>
      <Banner/>
    </div>
  )
}

export default App