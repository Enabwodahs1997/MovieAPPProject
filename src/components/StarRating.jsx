import { useState } from 'react'

export function StarRating({ rating = 0, onRatingChange, disabled = false }) {
    const [hoverRating, setHoverRating] = useState(0)

    const handleClick = (star) => {
        if (!disabled) {
            onRatingChange(star)
        }
    }

    const handleMouseEnter = (star) => {
        if (!disabled) {
            setHoverRating(star)
        }
    }

    const handleMouseLeave = () => {
        setHoverRating(0)
    }

    const displayRating = hoverRating || rating

    return (
        <div className="flex items-center gap-2">
            <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                    <button
                        key={star}
                        type="button"
                        onClick={() => handleClick(star)}
                        onMouseEnter={() => handleMouseEnter(star)}
                        onMouseLeave={handleMouseLeave}
                        disabled={disabled}
                        className={`text-2xl transition-all ${
                            disabled 
                                ? 'cursor-not-allowed opacity-50' 
                                : 'cursor-pointer hover:scale-110 active:scale-95'
                        } ${
                            star <= displayRating 
                                ? 'text-yellow-400 drop-shadow-md' 
                                : 'text-gray-300 hover:text-yellow-300'
                        }`}
                        aria-label={`Rate ${star} stars`}
                    >
                        ★
                    </button>
                ))}
            </div>
            {displayRating > 0 && (
                <span className="text-sm font-semibold text-fuchsia-900 ml-2">
                    {displayRating}/5
                </span>
            )}
        </div>
    )
}
