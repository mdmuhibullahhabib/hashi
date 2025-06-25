import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Anisul Hoque',
    review: 'Wonderful service! The doctors are very kind and the environment is clean and relaxing.',
    image: 'https://i.ibb.co/Sn8D0TJ/user1.png',
  },
  {
    name: 'Parbina Hossain',
    review: 'I was nervous about dental treatment but HASHI made everything comfortable and easy.',
    image: 'https://i.ibb.co/FxzqHyP/user2.png',
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-6 bg-base-200">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary mb-3">What Our Patients Say</h2>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto">Real words from real people. Here’s what our satisfied patients have to say about HASHI Dental.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white shadow-lg rounded-xl p-6 text-left">
              <div className="flex items-center gap-4 mb-3">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="text-md font-semibold">{t.name}</h4>
                </div>
              </div>
              <p className="text-sm text-gray-700 italic relative">
                <FaQuoteLeft className="text-accent absolute -top-3 left-0 text-xl" />
                <span className="ml-6 block">{t.review}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
