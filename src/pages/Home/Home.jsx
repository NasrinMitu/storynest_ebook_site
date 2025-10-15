import React from 'react'
import heroImage from '../../assets/hero-treehouse.png';


function Home() {
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
            <button className="bg-[color-regal-blue] text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-primary-accent transition-colors shadow-lg">
              Sign Up
            </button>
            <button className="bg-transparent text-[#3D2C2E] border-2 border-[#3D2C2E] px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#FFD166] hover:border-[#FFD166] transition-colors">
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
    </div>
  )
}

export default Home
