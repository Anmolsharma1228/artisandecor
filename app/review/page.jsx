"use client";
import { useEffect, useState } from "react";
import ReviewForm from "../components/ReviewForm";

export default function ReviewCards() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://script.google.com/macros/s/AKfycbxljDDkTWJyCJ7qLyAgYvUB1FmXv8obP1e08cjmBEhVp6K494yM5uXH-T2cwHnLkh7x/exec")
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);

  return (
  <section>
   <ReviewForm />
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 sm:mx-10">
      {reviews.map((r, i) => (
        <div key={i} className="bg-white border p-4 rounded">
          <h3 className="font-playfair">{r.name}</h3>
          <p className="font-playfair">{r.location}</p>
          <p>⭐ {r.rating}/5</p>
          <p className="font-inter">{r.review}</p>
        </div>
      ))}
    </div>
  </section>
  );
}
