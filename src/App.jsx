import React from 'react'
import './App.css'
import Home from './components/Home/Home'
import Footer from './components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { register } from 'swiper/element/bundle';
register();
AOS.init();

function App() {

  return (
    <>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
