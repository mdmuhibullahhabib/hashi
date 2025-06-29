import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

const Main = () => {
  return (
    <div>
      <header> </header>
      <div className="">
        <Outlet></Outlet>
      </div>

      <footer>
        <Footer></Footer>
      </footer>

    </div>
  )
}

export default Main;