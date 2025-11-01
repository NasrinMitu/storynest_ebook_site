import React from 'react'
import heroImage from '../../assets/hero-treehouse.png';
import BooksCarousel from '../../components/Books/BooksCarousel';
import { books } from '../../data/booksData';



function Home() {

    const featuredBooks = books.filter((book) => book.featured);

  return (
    <div>
<section className="bg-[#FFF8F0] py-16 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side: Heading, Paragraph, Buttons */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#3D2C2E] leading-tight mb-4">
            Discover Enchanting Stories
          </h1>
          <p className="text-lg text-[#3D2C2E] mb-8 max-w-lg mx-auto md:mx-0">
            Dive into a world of imagination with our curated collection of captivating children's ebooks.
            Every page is an adventure waiting to unfold!
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <button className="bg-primary-accent text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-primary-accent-hover transition-colors shadow-lg">
              Sign Up
            </button>
            <button className="bg-transparent text-text-dark border-2 border-text-dark px-8 py-3 rounded-full font-semibold text-lg hover:bg-secondary-accent hover:border-secondary-accent transition-colors">
              Sign In
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img 
            src={heroImage} 
            alt="Charming treehouse with birds, representing StoryNest" 
            className="max-w-full h-auto md:max-w-md lg:max-w-lg" 
          />
        </div>
      </div>
    </section>
     <BooksCarousel title='Featured Books' books={featuredBooks}/> {/* Add the new featured books section here */}
    </div>
  )
}

export default Home
