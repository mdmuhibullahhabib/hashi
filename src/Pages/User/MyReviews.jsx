import React, { useContext, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import useReviews from "../../hooks/useReviews";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../Provider/Authprovider";

const MyReviews = () => {
    const [reviews, refetch] = useReviews();
    const axiosSecure = useAxiosSecure();
    const [open, setOpen] = useState(false);
    const { user } = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const review = e.target.review.value;

        const response = axiosSecure.post('/reviews', {
            review,
            name: user.displayName,
            date: new Date().toISOString(),
        });
        console.log("Success:", response);

        Swal.fire({
            title: " Thanks For review!",
            icon: "success",
            confirmButtonColor: "#3085d6",
        });
        setOpen(false)
        refetch();
    };


    return (
        <div className="max-w-5xl mx-auto px-4 py-10">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800">Reviews</h2>
                <button
                    className="btn btn-primary"
                    onClick={() => setOpen(true)}
                >
                    Add Review
                </button>
            </div>

            {/* Review List */}
            <div className="grid gap-5">
                {reviews.length > 0 ? (
                    reviews.map((review, idx) => (
                        <div
                            key={idx}
                            className="bg-base-100 p-6 rounded-box shadow border"
                        >
                            <div className="flex items-start gap-3">
                                <FaQuoteLeft className="text-primary text-xl mt-1" />
                                <div>
                                    <p className="text-gray-800 mb-1 font-semibold">{review.name}</p>
                                    <p className="text-gray-800">{review.review}</p>
                                    <p className="text-sm text-gray-400 mt-2">
                                        {new Date(review.date).toLocaleString()}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No reviews yet. Be the first to write one!</p>
                )}
            </div>


            {/* Modal using DaisyUI */}
            {open && (
                <form onSubmit={handleSubmit} open className="modal modal-open">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg mb-4">Write a Review</h3>
                        <textarea
                            className="textarea textarea-bordered w-full min-h-[120px]"
                            placeholder="Share your experience..."
                            type="text"
                            name="review"
                        />
                        <div className="modal-action">
                            <button
                                onClick={() => setOpen(false)}
                                className="btn btn-outline"
                            >
                                Cancel
                            </button>
                            <button
                                className="btn btn-primary"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
};

export default MyReviews;
