import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import Header from '../Components/Header';
import useReviews from '../hooks/useReviews';

const Reviews = () => {
  const [reviews] = 

  return (
    <div>
      <Header maps="Reviews" name="Reviews" />

      <section className="bg-base-200 py-20 px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">What Our Patients Say</h2>
          <p className="text-gray-600 mt-2">Real stories from real patients.</p>
        </div>

        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          {reviews.length > 0 ? (
            reviews.map((r, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 relative hover:shadow-2xl transition"
              >
                <FaQuoteRight className="text-4xl text-accent absolute top-5 right-5 opacity-20" />
                <div className="mb-4">
                  <h4 className="font-semibold text-lg">{r.name || "Anonymous"}</h4>
                  <p className="text-sm text-gray-400">
                    {new Date(r.date).toLocaleDateString()}
                  </p>
                </div>
                <p className="text-gray-700 italic">“{r.review}”</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-3">No reviews yet.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Reviews;
