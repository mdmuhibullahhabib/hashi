// <div className="bg-[#013c36] text-white py-12 px-6">
//     <Navbar></Navbar>
//     <div className="max-w-6xl mx-auto mt-10">
//         <h2 className="text-xl">Home / Appointment</h2>
//         <h1 className="text-4xl font-bold mt-2">Appointment</h1>
//     </div>
// </div>


import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Calendar from '../Components/calendar';
import Header from '../Components/Header';

const services = [
    {
        name: 'Teeth Orthodontics',
        icon: 'https://i.ibb.co/yXJ9Dr9/001-dental.png',
        packages: [
            { name: 'Teeth Orthodontics', time: '8:00 AM - 9:00 AM' },
            { name: 'Teeth Orthodontics', time: '4:00 PM - 5:00 PM' },
        ],
    },
    {
        name: 'Cosmetic Dentistry',
        icon: 'https://i.ibb.co/GH7XLvT/002-cosmetic.png',
        packages: [
            { name: 'Cosmetic Dentistry', time: '10:00 AM - 11:00 AM' },
        ],
    },
    {
        name: 'Teeth Cleaning',
        icon: 'https://i.ibb.co/wCnHznK/003-cleaning.png',
        packages: [
            { name: 'Teeth Cleaning', time: '2:00 PM - 3:00 PM' },
        ],
    },
    {
        name: 'Cavity Protection',
        icon: 'https://i.ibb.co/k54v1Np/fluoride.png',
        packages: [
            { name: 'Basic Protection', time: '9:00 AM - 10:00 AM' },
        ],
    },
    {
        name: 'Pediatric Dental',
        icon: 'https://i.ibb.co/7WhbkZc/pediatric.png',
        packages: [
            { name: 'Child Care', time: '11:00 AM - 12:00 PM' },
        ],
    },
    {
        name: 'Oral Surgery',
        icon: 'https://i.ibb.co/g7skD6t/whitening.png',
        packages: [
            { name: 'Tooth Extraction', time: '1:00 PM - 2:00 PM' },
        ],
    },
];



const Appointment = () => {
    const [selectedService, setSelectedService] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState(null);

    const todayStr = new Date().toDateString();

    const handleServiceClick = (service) => {
        setSelectedService(service.name === selectedService?.name ? null : service);
    };

    const handleBookClick = (pkg) => {
        setSelectedPackage(pkg);
        setModalOpen(true);
    };

    return (

        <div className="">
            <Header
            maps={"Appointment"}
            name={"Appointment"}
            ></Header>
            <div className="max-w-7xl mx-auto px-4 py-10 font-sans">
                {/* Calendar + Image Section */}
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                    {/* Calendar */}
                    <div className="bg-white p-6 pt-14">
                        <Calendar></Calendar>
                    </div>

                    {/* Image */}
                    <div className="rounded-xl overflow-hidden shadow">
                        <img
                            src="https://i.ibb.co/WtqkrM2/dental-chair.jpg"
                            alt="Dental Chair"
                            className="w-full h-[500px] object-cover"
                        />
                    </div>
                </div>

                {/* Title */}
                <p className="text-sm text-center text-pink-400 mb-1">Available Services on April 23, 2025</p>
                <h2 className="text-center text-xl font-bold mb-8">Please select a service</h2>

                {/* Service Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-xl p-5 shadow hover:shadow-md transition cursor-pointer text-center ${selectedService?.name === service.name ? 'border-2 border-pink-500' : ''
                                }`}
                            onClick={() => handleServiceClick(service)}
                        >
                            <img src={service.icon} alt={service.name} className="w-10 h-10 mx-auto mb-4" />
                            <h3 className="font-semibold">{service.name}</h3>
                        </div>
                    ))}
                </div>

                {/* Package Cards */}
                {selectedService && (
                    <div>
                        <h3 className="text-center text-lg font-bold mb-6">
                            Available slots for {selectedService.name}
                        </h3>

                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {selectedService.packages.map((pkg, i) => (
                                <div
                                    key={i}
                                    className="bg-white border rounded-xl shadow p-5 text-center hover:shadow-md transition"
                                >
                                    <h4 className="text-base font-semibold mb-1">{pkg.name}</h4>
                                    <p className="text-sm text-gray-500 mb-3">{pkg.time}</p>
                                    <button onClick={() => handleBookClick(pkg)} className="btn btn-sm bg-pink-500 text-white hover:bg-pink-600">
                                        Book Appointment
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Modal */}
            {modalOpen && selectedPackage && (
                <dialog className="modal modal-open">
                    <div className="modal-box relative">
                        <button
                            onClick={() => setModalOpen(false)}
                            className="btn btn-sm btn-circle absolute right-2 top-2 bg-gray-300 hover:bg-gray-400"
                        >
                            ✕
                        </button>
                        <h3 className="font-bold text-lg mb-4">{selectedService?.name}</h3>
                        <form className="space-y-3">
                            <input
                                type="text"
                                defaultValue={todayStr}
                                disabled
                                className="input input-bordered w-full"
                            />
                            <input
                                type="text"
                                defaultValue={selectedPackage.time}
                                disabled
                                className="input input-bordered w-full"
                            />
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="input input-bordered w-full"
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="input input-bordered w-full"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="input input-bordered w-full"
                            />
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="btn bg-green-800 text-white w-full hover:bg-green-900"
                                >
                                    SUBMIT
                                </button>
                            </div>
                        </form>
                    </div>
                </dialog>
            )}
        </div>
    );
};


export default Appointment;
