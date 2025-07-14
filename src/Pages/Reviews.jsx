import React from 'react';
import { FaStar, FaQuoteRight } from 'react-icons/fa';
import Header from '../Components/Header';
import useReviews from '../hooks/useReviews';


const Reviews = () => {
  const [reviews, refetch] = useReviews()
  return (
       <div className="">
          <Header
        maps={"Reviews"}
        name={"Reviews"}
        ></Header>
    <section className="bg-base-200 py-20 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary">What Our Patients Say</h2>
        <p className="text-gray-600 mt-2">Real stories from real patients.</p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {reviews.map((r, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 relative hover:shadow-2xl transition">
            <FaQuoteRight className="text-4xl text-accent absolute top-5 right-5 opacity-20" />
            <div className="flex items-center gap-4 mb-4">
              <img src={r.photo} alt={r.name} className="w-14 h-14 rounded-full border-2 border-accent" />
              <div>
                <h4 className="font-semibold">{r.name}</h4>
                <div className="flex text-yellow-400">
                  {Array.from({ length: r.rating }, (_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-700 italic">“{r.feedback}”</p>
          </div>
        ))}
      </div>
    </section>
       </div>
  );
};

export default Reviews;
