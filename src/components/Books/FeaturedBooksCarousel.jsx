import React from 'react'
import React, { useState } from 'react';
import BookCard from './BookCard';

const sampleBooks = [
  {
    id: 1,
    title: "The Magical Treehouse",
    description: "Join Lily and Tom as they discover a secret world hidden within an old treehouse in their backyard. Adventures await!",
    coverImage: "https://via.placeholder.com/300x400/FFD166/3D2C2E?text=Book+1", // Example placeholder
  },
  {
    id: 2,
    title: "Whispering Woods Mystery",
    description: "A thrilling tale of young detectives solving the enigma of the Whispering Woods, where magical creatures roam.",
    coverImage: "https://via.placeholder.com/300x400/06D6A0/3D2C2E?text=Book+2",
  },
  {
    id: 3,
    title: "Journey to the Starfish Planet",
    description: "An epic space adventure following Captain Astro and his brave crew to a distant planet made entirely of starfish.",
    coverImage: "https://via.placeholder.com/300x400/FF6B6B/FFF8F0?text=Book+3",
  },
  {
    id: 4,
    title: "The Grumpy Dragon's Gold",
    description: "Barnaby the dragon loves his gold, but a mischievous fairy teaches him the joy of sharing. A heartwarming story.",
    coverImage: "https://via.placeholder.com/300x400/9CA3AF/3D2C2E?text=Book+4",
  },
  {
    id: 5,
    title: "Adventures of Pip the Squirrel",
    description: "Pip, a tiny squirrel with big dreams, embarks on a quest to find the legendary giant acorn.",
    coverImage: "https://via.placeholder.com/300x400/FFD166/3D2C2E?text=Book+5",
  },
  {
    id: 6,
    title: "The Cloud Napper's Secret",
    description: "When the clouds start disappearing, a young inventor must uncover the mystery of the elusive cloud napper.",
    coverImage: "https://via.placeholder.com/300x400/06D6A0/3D2C2E?text=Book+6",
  },
  {
    id: 7,
    title: "Princess Luna and the Moonstone",
    description: "Princess Luna's kingdom relies on the glowing moonstone, but when it fades, she must journey to restore its light.",
    coverImage: "https://via.placeholder.com/300x400/FF6B6B/FFF8F0?text=Book+7",
  },
  {
    id: 8,
    title: "Barnaby's Big Day Out",
    description: "Barnaby the bear leaves his cave for the first time and discovers the wonders of the forest. A tale of curiosity.",
    coverImage: "https://via.placeholder.com/300x400/9CA3AF/3D2C2E?text=Book+8",
  },
];

const BOOKS_PER_PAGE = 4;

const FeaturedBooksCarousel = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(sampleBooks.length / BOOKS_PER_PAGE);

  const currentBooks = sampleBooks.slice(
    currentPage * BOOKS_PER_PAGE,
    (currentPage + 1) * BOOKS_PER_PAGE
  );

  const goToNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  return (
    <section className="bg-primary-bg py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-text-dark mb-10 text-center">Featured Books</h2>
        
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>

          {/* Navigation Buttons */}
          {totalPages > 1 && (
            <>
              <button
                onClick={goToPrevPage}
                className="absolute top-1/2 left-0 -translate-x-full -translate-y-1/2 p-3 bg-text-dark text-primary-bg rounded-full shadow-lg hover:bg-primary-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-accent z-10"
                aria-label="Previous books"
              >
                <i className="fas fa-chevron-left"></i> {/* Font Awesome left arrow */}
              </button>
              <button
                onClick={goToNextPage}
                className="absolute top-1/2 right-0 translate-x-full -translate-y-1/2 p-3 bg-text-dark text-primary-bg rounded-full shadow-lg hover:bg-primary-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-accent z-10"
                aria-label="Next books"
              >
                <i className="fas fa-chevron-right"></i> {/* Font Awesome right arrow */}
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooksCarousel;


