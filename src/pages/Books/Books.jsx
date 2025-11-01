import React from 'react'
import BooksCarousel from '../../components/Books/BooksCarousel';
import { books } from "../../data/booksData";

function Books() {

  const featuredBooks = books.filter((book) => book.featured);
  const nightTimeStories = books.filter(
    (book) => book.category === "Nighttime Stories");
  return (
    <div>
                        <BooksCarousel title="Featured Books" books={featuredBooks} /> 
                        <BooksCarousel title="Nighttime Stories" books={nightTimeStories} />
      
    </div>
  )
}

export default Books;
