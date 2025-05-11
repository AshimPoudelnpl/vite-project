import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Banner from './components/Banner.jsx'
import About from './components/About.jsx'
import Serv from './components/Serv.jsx'
import Expertise from './components/Expertise.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Banner/>
    <About/>
    <Serv/>
    <Expertise/>
    <Footer/>

    </>
  );
}

export default App
