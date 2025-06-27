import React from 'react'
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'
import Doctors from '../Components/Home/Doctors'
import Testimonials from '../Components/Home/Testimonials'
import OurServices from '../Components/Home/OurServices'

const Home = () => {
  return (
    <div>
      <header>
        <Banner></Banner>
      </header>
      <main>
        <OurServices></OurServices>
        <Testimonials></Testimonials>
        <Doctors></Doctors>
      </main>
    </div>
  )
}

export default Home;