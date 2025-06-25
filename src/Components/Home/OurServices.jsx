import React from 'react';
import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const OurServices = () => {
    return (
        <section className="py-16 bg-base-100 px-4">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
                {/* Left Side Image */}
                <div className="flex-1">
                    <img
                        src="https://i.ibb.co/Qv9KJ0PT/Screenshot-171.png"
                        alt="doctor"
                        className="rounded-xl w-full h-[800px] mx-auto"
                    />
                </div>

                {/* Right Side Content */}
                <div className="flex-1">
                    <h2 className="text-4xl font-bold text-primary mb-2">Our Services</h2>
                    <p className="text-gray-600 mb-4">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>

                    {/* Category Buttons */}
                    <div className="flex flex-wrap gap-3 mb-6">
                        <button className="btn btn-sm btn-error text-white">Cavity Protection</button>
                        <button className="btn btn-sm btn-outline">Cosmetic Dentistry</button>
                        <button className="btn btn-sm btn-outline">Oral Surgery</button>
                    </div>

                    {/* Highlighted Service Box */}
                    <div className="bg-white rounded-xl p-5">
                        <img
                            src="https://i.ibb.co/Q7dQQzBy/enis-yavuz-i-Gf7-Cf-Wgj-TI-unsplash.jpg"
                            alt="Electro Gastrology Therapy"
                            className="w-[558px] h-[350px] mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-800">Electro Gastrology Therapy</h3>
                        <p className="text-sm text-gray-600 mt-2">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                            totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae
                            dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error 
                            <br></br>
                            <br></br>
                            Sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                            eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                        <button className="btn btn-outline btn-sm text-orange-500 border-orange-400 mt-4">More Details</button>
                    </div>
                </div>
            </div>

            {/* Bottom: Info Boxes */}
            <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Opening Hours */}
                <div className="bg-[#0B2727] text-white p-6 rounded-xl flex items-start gap-4 shadow-md">
                    <FaClock className="text-3xl mt-1 text-accent" />
                    <div>
                        <h4 className="text-lg font-semibold">Opening Hours</h4>
                        <p className="text-sm">Open 9.00 am to 5.00 pm Every day</p>
                    </div>
                </div>

                {/* Our Location */}
                <div className="bg-[#F97316] text-white p-6 rounded-xl flex items-start gap-4 shadow-md">
                    <FaMapMarkerAlt className="text-3xl mt-1" />
                    <div>
                        <h4 className="text-lg font-semibold">Our Locations</h4>
                        <p className="text-sm">Dhanmondi 17, Dhaka - 1200, Bangladesh</p>
                    </div>
                </div>

                {/* Contact Us */}
                <div className="bg-[#0B2727] text-white p-6 rounded-xl flex items-start gap-4 shadow-md">
                    <FaPhoneAlt className="text-3xl mt-1 text-accent" />
                    <div>
                        <h4 className="text-lg font-semibold">Contact Us</h4>
                        <p className="text-sm">+880 123 456 7890<br />+880 987 654 3210</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurServices;

// import React from 'react';

// const OurServices = () => {
//   return (
//     <section className="bg-base-100 px-6 py-16">
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
//         {/* Left Side Image */}
//         <div className="flex-1">
//           <img
//             src="https://i.ibb.co/6nzzGgC/female-doctor.png"
//             alt="Doctor"
//             className="rounded-xl w-full max-w-sm mx-auto"
//           />
//         </div>

//         {/* Right Side Content */}
//         <div className="flex-1 w-full">
//           {/* Heading */}
//           <h2 className="text-4xl font-bold text-primary mb-2">Our Services</h2>
//           <p className="text-gray-600 mb-5">
//             Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
//             totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
//           </p>

//           {/* Category Buttons */}
//           <div className="flex flex-wrap gap-3 mb-6">
//             <button className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm">Cavity Protection</button>
//             <button className="bg-gray-100 text-gray-800 px-4 py-1 rounded-full text-sm">Cosmetic Dentistry</button>
//             <button className="bg-gray-100 text-gray-800 px-4 py-1 rounded-full text-sm">Oral Surgery</button>
//           </div>

//           {/* Featured Service */}
{/* <div className="bg-white border-2 border-blue-200 rounded-xl p-5 shadow-md">
    <img
        src="https://i.ibb.co/3MMYFqG/dental-service.png"
        alt="Electro Gastrology Therapy"
        className="w-full h-48 object-contain mx-auto mb-4"
    />
    <h3 className="text-xl font-semibold text-gray-800">Electro Gastrology Therapy</h3>
    <p className="text-sm text-gray-600 mt-2">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
        Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.
    </p>
    <button className="btn btn-outline btn-sm text-orange-500 border-orange-400 mt-4">More Details</button>
</div> */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurServices;

