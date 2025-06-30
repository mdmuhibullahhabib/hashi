import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaQuoteLeft } from "react-icons/fa";

const MyReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState("");
    const [open, setOpen] = useState(false);

    // Fetch reviews
    useEffect(() => {

            const mockReviews = [
        {
            review: "This service exceeded my expectations. The team was professional and kind.",
            date: "2025-06-25T10:00:00.000Z",
        },
        {
            review: "Very satisfied with the consultation. Highly recommended!",
            date: "2025-06-20T14:30:00.000Z",
        },
        {
            review: "Quick response, great communication, and helpful advice.",
            date: "2025-06-18T09:15:00.000Z",
        },
        {
            review: "Everything went smoothly. Will use the service again in the future.",
            date: "2025-06-10T16:45:00.000Z",
        },
    ];

    setReviews(mockReviews);

        // axios.get("https://your-backend-url.com/api/reviews")
        //     .then(res => setReviews(res.data))
        //     .catch(err => console.error(err));
    }, []);

    const handleSubmit = async () => {
        if (!newReview.trim()) return;
            const response = await axios.post("https://doc-house-server-weld.vercel.app/reviews", {
                review: newReview,
                date: new Date().toISOString(),
            });
            setReviews([...reviews, response.data]);
            setNewReview("");
            setOpen(false);
            console.log(response)

    };

    return (
        <div className="max-w-5xl mx-auto px-4 py-10">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800">My Reviews</h2>
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
                <dialog open className="modal modal-open">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg mb-4">Write a Review</h3>
                        <textarea
                            className="textarea textarea-bordered w-full min-h-[120px]"
                            placeholder="Share your experience..."
                            value={newReview}
                            onChange={(e) => setNewReview(e.target.value)}
                        />
                        <div className="modal-action">
                            <button
                                onClick={() => setOpen(false)}
                                className="btn btn-outline"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="btn btn-primary"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default MyReviews;
