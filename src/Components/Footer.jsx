import React from 'react';
import { FaTooth, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content px-6 py-10 mt-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                {/* Left: Logo & Description */}
                <div className="md:col-span-1 space-y-4">
                    <div className="flex items-center text-2xl font-bold text-primary">
                          H<span><FaTooth className="text-3xl text-accent"/></span>SHI
                    </div>
                    <p className="text-gray-600">
                        HASHI Dental Clinic offers professional dental care with modern equipment and skilled doctors. We believe in healthy smiles and patient satisfaction.
                    </p>
                    <button className="btn btn-accent text-white mt-2">Book Appointment</button>
                </div>

                {/* Right: 3 Columns */}
                <div className="md:col-span-1 lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-2 text-primary">Quick Links</h4>
                        <ul className="space-y-1 text-gray-600">
                            <li><a className="link link-hover">Home</a></li>
                            <li><a className="link link-hover">About Us</a></li>
                            <li><a className="link link-hover">Services</a></li>
                            <li><a className="link link-hover">Our Team</a></li>
                            <li><a className="link link-hover">Testimonials</a></li>
                            <li><a className="link link-hover">Blog</a></li>
                            <li><a className="link link-hover">FAQs</a></li>
                            <li><a className="link link-hover">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Doc House Services */}
                    <div>
                        <h4 className="font-semibold text-lg mb-2 text-primary">Doc House Services</h4>
                        <ul className="space-y-1 text-gray-600">
                            <li>Teeth Cleaning</li>
                            <li>Root Canal Treatment</li>
                            <li>Braces & Aligners</li>
                            <li>Cosmetic Dentistry</li>
                            <li>Dental Implants</li>
                            <li>Tooth Extraction</li>
                            <li>Oral Surgery</li>
                        </ul>
                    </div>

                    {/* Working Hours */}
                    <div>
                        <h4 className="font-semibold text-lg mb-2 text-primary">Working Hours</h4>
                        <ul className="space-y-1 text-gray-600">
                            <li>Mon - Fri: 9am - 8pm</li>
                            <li>Saturday: 10am - 6pm</li>
                            <li>Sunday: Closed</li>
                            <li className="mt-4 font-semibold text-primary">Emergency Hotline:</li>
                            <li className="flex items-center gap-2"><FaPhoneAlt className="text-accent" /> +880 1234-567890</li>
                            <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-accent" /> Dhaka, Bangladesh</li>
                            <li className="flex items-center gap-2"><FaEnvelope className="text-accent" /> info@hashidental.com</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-10 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} HASHI Dental. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
