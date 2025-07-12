import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-[#e0f7fa] to-[#ffffff]">
      <div>
        <Navbar className="bg-[#013c36]" />
      </div>

      <div className="hero min-h-[80vh]">
        <div className="relative z-20 flex flex-col-reverse md:flex-row items-center justify-between px-6 py-12 max-w-7xl mx-auto">

          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left space-y-5">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              A Brighter Dental Future Starts Here
            </h1>
            <p className="text-lg text-gray-700">
              At <span className="font-semibold text-accent">HASHI Dental</span>, we combine technology and compassion to provide top-notch care. Your smile deserves the best.
            </p>
            <button className="btn btn-accent text-white px-6">Schedule Your Visit</button>
          </div>

          {/* Dentist Images with Floating Motion */}
          <div className="md:w-1/2 relative h-[300px] md:h-[400px] flex items-center justify-center">
            <motion.img
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              whileHover={{ scale: 1.05 }}
              src="https://i.ibb.co/nNYNsTbK/asian-female-dentist-demonstrating-teeth-brushing-technique-patient.jpg"
              alt="Dentist 1"
              className="w-32 md:w-40 rounded-xl shadow-lg absolute top-0 left-0 border-4 border-white z-30"
            />

            <motion.img
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              whileHover={{ scale: 1.05 }}
              src="https://i.ibb.co/wZxQNQ51/doctor-with-magnifying-glass-white-background.jpg"
              alt="Dentist 2"
              className="w-36 md:w-48 rounded-xl shadow-lg absolute bottom-0 right-0 border-4 border-white z-20"
            />

            <motion.img
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              whileHover={{ scale: 1.05 }}
              src="https://i.ibb.co/tM0cr1Tt/stomatologist-doctor-explaining-proper-dental-hygiene-patient-holding-sample-human-jaw.jpg"
              alt="Dentist 3"
              className="w-36 md:w-44 rounded-xl shadow-lg absolute top-10 right-10 border-4 border-white z-10"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
