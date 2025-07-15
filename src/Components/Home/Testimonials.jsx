import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';


const Testimonials = () => {
      const axiosPublic = useAxiosPublic();

        const { data: reviews = [] } = useQuery({
            queryKey: ['reviews'],
            queryFn: async () => {
                const res = await axiosPublic.get('/reviews-random')
                return res.data;
            }
        })
        console.log(reviews)

  return (
    <section className="py-16 px-6 bg-base-200">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary mb-3">What Our Patients Say</h2>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto">Real words from real people. Here’s what our satisfied patients have to say about HASHI Dental.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((t, idx) => (
            <div key={idx} className="bg-white shadow-lg rounded-xl p-6 text-left">
              <div className="flex items-center gap-4 mb-3">
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
