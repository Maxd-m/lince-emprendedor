// src/components/ReviewCard.tsx
import React from "react";

export interface Review {
  id: string;
  userName: string;
  userAvatar: string;
  rating: number;
  comment: string;
  date: string;
}

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="bg-base-200 p-5 rounded-2xl border border-base-300">
      <div className="flex gap-4 items-center mb-3">
        <div className="avatar">
          <div className="w-12 h-12 rounded-full border-2 border-base-100 shadow-sm">
            <img src={review.userAvatar} alt={review.userName} />
          </div>
        </div>
        <div>
          <h4 className="font-bold text-base-content">{review.userName}</h4>
          <div className="text-warning text-sm tracking-widest">
            {"★".repeat(review.rating)}
            <span className="opacity-30">{"★".repeat(5 - review.rating)}</span>
          </div>
        </div>
        <span className="ml-auto text-xs text-base-content/50 font-medium">
          {new Date(review.date).toLocaleDateString()}
        </span>
      </div>
      <p className="text-base-content/80 text-sm md:text-base">
        {review.comment}
      </p>
    </div>
  );
};
