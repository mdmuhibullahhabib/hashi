import React from 'react'
import Navbar from './Navbar'

const Header = ({maps, name}) => {
    return (
        <div className="bg-[#013c36] text-white py-12 px-6">
            <Navbar></Navbar>
            <div className="max-w-6xl mx-auto mt-5">
                <h2 className="text-xl">Home / {maps}</h2>
                <h1 className="text-4xl font-bold mt-4 ml-4">{name}</h1>
            </div>
        </div>
    )
}

export default Header