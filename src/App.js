import React from 'react'


import Center from './component/Center'
import Footer from './component/Footer'
import Header from './component/Header'
import Landing from './component/Landing'
import Main from './component/main/Main'
import NavBar from './component/NavBar'
import PreFooter from './component/PreFooter'
import Service from './component/Service'
import './style.css'



function App() {
  return (
    <>
        <NavBar/>
        <Header/>
        <Center/>
        <Main/>
        <Service/>
        <PreFooter/>
        <Footer/>
        <Landing/>
    </>
  )
}

export default App