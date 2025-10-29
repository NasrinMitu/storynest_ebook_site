import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import BookCard from "./BookCard";
import { books } from "../../data/books";

const FeaturedBooksCarousel = () => {
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
          Featured Books
        </h2>

        <div className="relative">
          {/* Embla main viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {books.map((book) => (
                <div
                  key={book.id}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%] px-3" // 4 per view
                >
                  <BookCard book={book} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-full p-3 bg-text-dark text-primary-bg rounded-full shadow-lg hover:bg-primary-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-accent z-10"
            aria-label="Previous books"
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <button
            onClick={scrollNext}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-full p-3 bg-text-dark text-primary-bg rounded-full shadow-lg hover:bg-primary-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-accent z-10"
            aria-label="Next books"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooksCarousel;
