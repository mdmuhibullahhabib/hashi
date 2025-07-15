import React, { useContext, useState } from 'react';
import Calendar from '../Components/calendar';
import Header from '../Components/Header';
import useAxiosPublic from '../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/Authprovider';
import { useNavigate } from 'react-router-dom';

const services = [
    {
        name: 'Teeth Orthodontics',
        icon: 'https://i.ibb.co/srGqtff/IMG-20250627-WA0005.jpg',
        packages: [
            { name: 'Teeth Orthodontics', time: '8:00 AM - 9:00 AM' },
            { name: 'Teeth Orthodontics', time: '4:00 PM - 5:00 PM' },
        ],
    },
    {
        name: 'Cosmetic Dentistry',
        icon: 'https://i.ibb.co/jkWX7Bfs/1000032395.jpg',
        packages: [{ name: 'Cosmetic Dentistry', time: '10:00 AM - 11:00 AM' }],
    },
    {
        name: 'Teeth Cleaning',
        icon: 'https://i.ibb.co/JjXL3bZm/1000032389.jpg',
        packages: [{ name: 'Teeth Cleaning', time: '2:00 PM - 3:00 PM' }],
    },
    {
        name: 'Cavity Protection',
        icon: 'https://i.ibb.co/RpW5H8dY/1000032398.jpg',
        packages: [{ name: 'Basic Protection', time: '9:00 AM - 10:00 AM' }],
    },
    {
        name: 'Pediatric Dental',
        icon: 'https://i.ibb.co/sdvr1z4V/1000032404.jpg',
        packages: [{ name: 'Child Care', time: '11:00 AM - 12:00 PM' }],
    },
    {
        name: 'Oral Surgery',
        icon: 'https://i.ibb.co/8gcRhm5x/1000032402.jpg',
        packages: [{ name: 'Tooth Extraction', time: '1:00 PM - 2:00 PM' }],
    },
];

const Appointment = () => {
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);
    const [selectedService, setSelectedService] = useState(null);
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [bookingInfo, setBookingInfo] = useState({ name: '', phone: '' });

    const todayStr = new Date().toDateString();

    const handleServiceClick = (service) => {
        setSelectedService(service.name === selectedService?.name ? null : service);
    };

    const handleBookClick = (pkg) => {
        setSelectedPackage(pkg);
        setModalOpen(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const appointment = {
            service: selectedService.name,
            slot: selectedPackage.time,
            date: todayStr,
            patientName: bookingInfo.name,
            phone: bookingInfo.phone,
            email: user?.email,
            status: 'pending',
        };

            const res = await axiosPublic.post('/appointment', appointment);
            if (res.data.insertedId) {
                Swal.fire({
                    title: 'Appointment Successful!',
                    icon: 'success',
                    confirmButtonColor: '#3085d6',
                });
                navigate('/dashboard/booked-appointments')
                setModalOpen(false);
                setBookingInfo({ name: '', phone: '' });
            } else {
                Swal.fire({
                    title: 'Something went wrong!',
                    icon: 'error',
                });
            }
    };

    return (
        <div>
            <Header maps="Appointment" name="Appointment" />
            <div className="max-w-7xl mx-auto px-4 py-10 font-sans">
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                    <div className="bg-white p-6 pt-14">
                        <Calendar />
                    </div>
                    <div className="rounded-xl overflow-hidden shadow">
                        <img
                            src="https://i.ibb.co/SwdL7B1Z/full-equiped-medical-cabinet.jpg"
                            alt="Dental Chair"
                            className="w-full h-[500px] object-cover"
                        />
                    </div>
                </div>

                <p className="text-sm text-center text-pink-400 mb-1">Available Services on {todayStr}</p>
                <h2 className="text-center text-xl font-bold mb-8">Please select a service</h2>

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
                                    <button
                                        onClick={() => handleBookClick(pkg)}
                                        className="btn btn-sm bg-pink-500 text-white hover:bg-pink-600"
                                    >
                                        Book Appointment
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

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
                        <form className="space-y-3" onSubmit={handleSubmit}>
                            <input type="text" value={todayStr} disabled className="input input-bordered w-full" />
                            <input type="text" value={selectedPackage.time} disabled className="input input-bordered w-full" />
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="input input-bordered w-full"
                                value={bookingInfo.name}
                                onChange={(e) => setBookingInfo({ ...bookingInfo, name: e.target.value })}
                                required
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="input input-bordered w-full"
                                value={bookingInfo.phone}
                                onChange={(e) => setBookingInfo({ ...bookingInfo, phone: e.target.value })}
                                required
                            />
                            <div className="text-center">
                                <button type="submit" className="btn bg-green-800 text-white w-full hover:bg-green-900">
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
