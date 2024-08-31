import React from 'react'
// import NavbarH from '../components/Navbar-Home'
import Hero from '../components/Hero'
import Mission from '../components/Mission'
import Footer from '../components/Footer'
import '../css/Home.css'

const Home = () => {
  return (
    <div className="App">
      {/* <NavbarH /> */}
      <Hero />
      <Mission />
      <Footer />
    </div>
  )
}

export default Home
