import React from 'react';
import { FaSmile, FaHeartbeat, FaTooth, FaUserMd } from 'react-icons/fa';
import Header from '../Components/Header';

const About = () => {
    return (
        <div className="">
            <Header
                maps={"About"}
                name={"About"}
            ></Header>
            <section className="bg-base-100 text-gray-800">
                {/* Hero */}
                <div className="bg-gradient-to-r from-accent via-white to-accent/30 py-20 px-6 text-center">
                    <h1 className="text-5xl font-bold text-primary mb-4">About HASHI Dental</h1>
                    <p className="text-lg max-w-3xl mx-auto text-gray-600">
                        Bringing brighter smiles to life. At HASHI, we believe dental care should be modern, gentle, and personal.
                    </p>
                </div>

                {/* Who We Are */}
                <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
                    <img
                        src="https://i.ibb.co/Qv93DmyP/about-us-information-service-sharing-join-concept.jpg"
                        alt="About Us Doctor"
                        className="rounded-xl w-full max-w-sm mx-auto"
                    />
                    <div>
                        <h2 className="text-3xl font-bold text-primary mb-4">Who We Are</h2>
                        <p className="text-gray-700 mb-4">
                            HASHI Dental is a state-of-the-art clinic focused on modern dental practices. With a highly experienced team of dentists and staff, we offer top-tier care that makes every patient feel like family.
                        </p>
                        <p className="text-gray-700">
                            Whether you're here for a regular checkup or a complete smile makeover — you're in good hands with us.
                        </p>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-base-200 py-16 px-6 text-center">
                    <h2 className="text-3xl font-bold text-primary mb-6">Why Choose HASHI Dental?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <FaUserMd className="text-3xl text-accent mb-3 mx-auto" />
                            <h4 className="font-semibold mb-1">Expert Dentists</h4>
                            <p className="text-sm text-gray-600">Our team consists of certified, highly-rated professionals.</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <FaTooth className="text-3xl text-accent mb-3 mx-auto" />
                            <h4 className="font-semibold mb-1">Advanced Equipment</h4>
                            <p className="text-sm text-gray-600">We use the latest tools and tech to ensure the best results.</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <FaHeartbeat className="text-3xl text-accent mb-3 mx-auto" />
                            <h4 className="font-semibold mb-1">Patient-Centered</h4>
                            <p className="text-sm text-gray-600">Your comfort, clarity, and care are our highest priority.</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <FaSmile className="text-3xl text-accent mb-3 mx-auto" />
                            <h4 className="font-semibold mb-1">Beautiful Results</h4>
                            <p className="text-sm text-gray-600">We deliver healthy, natural-looking smiles every day.</p>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="py-16 px-6 max-w-6xl mx-auto text-center">

                </div>

                {/* Call to Action */}
                <div className="bg-accent text-white text-center py-12">
                    <h3 className="text-3xl font-bold mb-3">Ready to Smile Brighter?</h3>
                    <p className="mb-5">Schedule your appointment today with one of our expert dentists.</p>
                    <button className="btn btn-outline text-white border-white hover:bg-white hover:text-accent">Book an Appointment</button>
                </div>
            </section>
        </div>
    );
};

export default About;
