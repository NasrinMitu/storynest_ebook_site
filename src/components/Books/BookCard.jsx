import React from 'react';
import { Link} from "react-router-dom";


function BookCard({ book }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out border border-muted-gray/30 h-[420px] flex flex-col justify-between p-4">
      {/* Book Cover */}
      <img
        src={book.coverImage}
        alt={book.title}
        className="w-full h-[230px] object-cover object-center rounded-md mb-3"
      />

      {/* Book Info */}
      <div className="flex flex-col flex-grow justify-between">
        <h3 className="text-lg font-semibold text-text-dark mb-1 leading-snug line-clamp-2">
          {book.title}
        </h3>
        <p className="text-sm text-text-dark/80 mb-4 line-clamp-3">
          {book.description}
        </p>

        {/* Action Button */}
        <Link to={`/book/${book.id}`} className="w-full bg-secondary-accent text-center text-text-dark py-2 rounded-md font-medium hover:bg-primary-accent hover:text-primary-bg transition-colors duration-300">
          Read Now
        </Link>
      </div>
    </div>
  );
}

export default BookCard;
