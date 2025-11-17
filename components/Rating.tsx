'use client';

import { useState } from 'react';

interface RatingProps {
  logoId?: string;
  initialRating?: number;
  onRate?: (rating: number) => void;
  readonly?: boolean;
}

export default function Rating({ logoId, initialRating = 0, onRate, readonly = false }: RatingProps) {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);

  const handleClick = (value: number) => {
    if (readonly) return;

    setRating(value);

    // Save to localStorage
    if (logoId) {
      const ratings = JSON.parse(localStorage.getItem('logo_ratings') || '{}');
      ratings[logoId] = value;
      localStorage.setItem('logo_ratings', JSON.stringify(ratings));
    }

    // Callback
    if (onRate) {
      onRate(value);
    }
  };

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => handleClick(star)}
          onMouseEnter={() => !readonly && setHover(star)}
          onMouseLeave={() => !readonly && setHover(0)}
          className={`transition-all transform ${readonly ? '' : 'hover:scale-110'}`}
          disabled={readonly}
        >
          <svg
            className={`w-6 h-6 transition-colors ${
              star <= (hover || rating)
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-gray-300 dark:text-gray-600 fill-none'
            }`}
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
        </button>
      ))}
      {!readonly && (
        <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
          {rating > 0 ? `${rating}/5` : 'Non noté'}
        </span>
      )}
    </div>
  );
}
