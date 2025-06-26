import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Header from '../Components/Header';

const Contact = () => {
    return (
        <div className="">
            <Header
                maps={"Contact"}
                name={"Contact"}
            ></Header>
            <section className="bg-base-100 py-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-4xl font-bold text-primary mb-6">Get In Touch</h2>
                        <p className="text-gray-600 mb-6">
                            We’re here to help! Feel free to reach out via phone or message. We’ll get back to you shortly.
                        </p>

                        <div className="space-y-5">
                            <div className="flex items-start gap-4">
                                <FaMapMarkerAlt className="text-2xl text-accent mt-1" />
                                <p>2nd Floor, Bashundhara City Complex, Dhaka</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <FaPhoneAlt className="text-2xl text-accent mt-1" />
                                <p>+880 1234 567 890</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <FaEnvelope className="text-2xl text-accent mt-1" />
                                <p>info@hashidental.com</p>
                            </div>
                        </div>

                        {/* Google Map */}
                        <div className="mt-8 border-2 border-accent rounded-xl overflow-hidden">
                            <iframe
                                title="clinic location"
                                className="w-full h-64"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.5397300741944!2d90.38760231536384!3d23.80138009230459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7e37c42b971%3A0xa442b103ea8b1d10!2sBashundhara%20City%20Shopping%20Complex!5e0!3m2!1sen!2sbd!4v1700000000000"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white shadow-xl rounded-xl p-8">
                        <h3 className="text-2xl font-semibold mb-6 text-primary">Send Us a Message</h3>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="input input-bordered w-full"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="input input-bordered w-full"
                                required
                            />
                            <textarea
                                rows="4"
                                placeholder="Your Message"
                                className="textarea textarea-bordered w-full"
                                required
                            />
                            <button className="btn btn-accent w-full">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
