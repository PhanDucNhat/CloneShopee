import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner.jsx";
import Category from './components/Categories/Category';

const App = () => {
  return (
    <main>
      <Navbar/>
      <Header/>
      <Banner/>
      <Category/>
    </main>
  )
}

export default App