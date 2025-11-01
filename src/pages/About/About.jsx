import React from 'react'

function About() {
  return (
    <div className="bg-[#FFF8F0] min-h-screen py-20 px-8 md:px-16">
       <div className="max-w-5xl w-full mx-auto mt-16 text-[#3D2C2E] text-lg space-y-6 ">
        <h2 className="text-3xl font-bold text-[#3D2C2E] mb-8 text-center">About StoryNest</h2>
        <p className="leading-[1.8]">
          At StoryNest, we believe that reading can change lives.
          Every story, every page has the power to inspire, educate, and open
          new worlds. Your donations help us keep this vision alive. They allow
          us to create and share more eBooks, translate them into new languages,
          and make them accessible to readers everywhere. 
          <br /> You can choose to give
          once or support us monthly — either way, your contribution helps bring
          stories to more people. Every donation, big or small, makes a
          difference. If you’d like to know more about our projects or how your
          support is used, we’d love to hear from you. Together, we can make
          reading a joy that’s available to everyone, everywhere.
        </p>
      </div>
    </div>
  )
}

export default About
