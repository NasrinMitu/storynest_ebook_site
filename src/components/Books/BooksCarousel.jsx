import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import BookCard from "./BookCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const BooksCarousel = ({ title, books }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 4,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="bg-primary-bg py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-text-dark mb-10 text-center">
          {title}
        </h2>

        <div className="relative">
          {/* Embla main viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex my-4">
              {books && books.length > 0 ? (
                books.map((book) => (
                  <div
                    key={book.id}
                    className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%] px-3"
                  >
                    <BookCard book={book} />
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 w-full">
                  No books available.
                </p>
              )}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute top-1/2 -left-10 -translate-y-1/2 text-text-dark hover:text-primary-accent transition-colors duration-300 focus:outline-none z-10"
            aria-label="Previous books"
          >
            <FaChevronLeft size={25} />
          </button>

          <button
            onClick={scrollNext}
            className="absolute top-1/2 -right-10 -translate-y-1/2 text-text-dark hover:text-primary-accent transition-colors duration-300 focus:outline-none z-10"
            aria-label="Next books"
          >
            <FaChevronRight size={25} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BooksCarousel;
