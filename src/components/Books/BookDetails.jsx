import React from "react";
import { useParams } from "react-router-dom";
import { FaHeart, FaShare, FaBookOpen } from "react-icons/fa"; // icons

const BookDetails = ({ books }) => {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return <div className="text-center text-text-dark mt-10">Book not found.</div>;
  }

  return (
    <div className="min-h-screen bg-primary-bg flex flex-col items-center px-6 py-12">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side: Book Cover */}
        <div className="flex justify-center">
          <img
            src={book.coverImage}
            alt={book.title}
            className="rounded-2xl shadow-md border border-muted-gray/30 w-full max-w-sm object-cover"
          />
        </div>

        {/* Right Side: Book Info */}
        <div className="flex flex-col gap-6 text-text-dark">
          {/* Title */}
          <h1 className="text-3xl font-bold leading-tight">{book.title}</h1>

          {/* Actions Row */}
          <div className="flex items-center gap-4">
            {/* Favourite */}
            <button
              className="p-2 bg-secondary-accent rounded-full hover:bg-primary-accent transition-colors"
              aria-label="Add to favourites"
            >
              <FaHeart className="text-text-dark w-5 h-5" />
            </button>

            {/* Share */}
            <button
              className="p-2 bg-secondary-accent rounded-full hover:bg-primary-accent transition-colors"
              aria-label="Share book"
            >
              <FaShare className="text-text-dark w-5 h-5" />
            </button>

            {/* Read Now */}
            <button className="flex items-center gap-2 bg-secondary-accent text-text-dark font-semibold py-2 px-4 rounded-md hover:bg-primary-accent hover:text-primary-bg transition-all">
              <FaBookOpen className="w-5 h-5" />
              Read Now
            </button>
          </div>

          {/* Description */}
          <p className="text-base text-text-dark/80 leading-relaxed">
            {book.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
