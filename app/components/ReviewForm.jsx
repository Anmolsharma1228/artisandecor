"use client";
import { useState } from "react";
import { Star } from "lucide-react";

export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [form, setForm] = useState({
    name: "",
    location: "",
    review: "",
  });

  const submitReview = async (e) => {
    e.preventDefault();

    await fetch("https://script.google.com/macros/s/AKfycbxljDDkTWJyCJ7qLyAgYvUB1FmXv8obP1e08cjmBEhVp6K494yM5uXH-T2cwHnLkh7x/exec", {
      method: "POST",
      body: new URLSearchParams({
        ...form,
        rating,
      }),
    });

    alert("Thank you for your valuable review ✨");

    setForm({ name: "", location: "", review: "" });
    setRating(0);
  };

  return (
    <section className="py-16 bg-[#faf7f2] mt-16">
      <div className="max-w-3xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="font-playfair text-3xl font-semibold text-gray-900">
            Share Your Experience
          </h2>
          <p className="font-inter text-gray-600 mt-2">
            Your feedback helps us improve our decor & design services
          </p>
        </div>

        {/* Card */}
        <form
          onSubmit={submitReview}
          className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 space-y-6"
        >
          {/* Name & Location */}
          <div className="grid sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="text"
              placeholder="City / Location"
              required
              value={form.location}
              onChange={(e) =>
                setForm({ ...form, location: e.target.value })
              }
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Rating */}
          <div>
            <p className="text-gray-700 mb-2 font-medium">
              Rating
            </p>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={28}
                  onClick={() => setRating(star)}
                  className={`cursor-pointer transition ${
                    rating >= star
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Review */}
          <textarea
            placeholder="Write your review..."
            required
            rows={4}
            value={form.review}
            onChange={(e) =>
              setForm({ ...form, review: e.target.value })
            }
            className="border border-gray-300 rounded-lg px-4 py-3 w-full resize-none focus:outline-none focus:ring-2 focus:ring-black"
          />

          {/* Button */}
          <button
            type="submit"
            disabled={rating === 0}
            className="font-inter w-full bg-black text-white py-3 rounded-lg text-lg font-medium hover:bg-gray-900 transition disabled:opacity-50"
          >
            Submit Review
          </button>
        </form>
      </div>
    </section>
  );
}
