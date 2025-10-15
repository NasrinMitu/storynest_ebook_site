import React from "react";
import {Link, NavLink} from 'react-router-dom'
import logoImage from '../../assets/StoryNestLogo.png';
import birdCharacterImage from '../../assets/BirdCharacter.png';

function Header(){
    return(
        <header className="w-full bg-[#FFF8F0] shadow-sm">
            {/* <nav className="navbar">
                
                     <Link to='/' className="logo">
                        <img src="logo.jpg" alt="Logo" />
                        
                     </Link>

                     <div id="navlinks">

                         <ul>
                            <li> <NavLink className="text-[#3D2C2E] font-medium hover:text-[#06D6A0] transition-colors" to="/" > Home </NavLink> </li>
                            <li> <NavLink className="text-[#3D2C2E] font-medium hover:text-[#06D6A0] transition-colors" to="/books"> Books </NavLink> </li>
                            <li> <NavLink className="text-[#3D2C2E] font-medium hover:text-[#06D6A0] transition-colors" to="/about"> About </NavLink> </li>
                            <li> <NavLink className="text-[#3D2C2E] font-medium hover:text-[#06D6A0] transition-colors" to="/contact"> Contact </NavLink> </li>

                         </ul>

                     </div>

                
            </nav> */}

            <div className="flex justify-between items-center py-2 px-8 border-b border-[#9CA3AF]">

                <div className="flex items-center">
                     <img 
                        src={logoImage} 
                        alt="StoryNest Logo" 
                        className="h-20 w-auto md:h-24 lg:h-28 -my-4" 
                     />
                </div>

            

             <div className="flex items-center space-x-4">
          {/* Language Dropdown */}
          <select className="bg-transparent text-[#3D2C2E] border-none focus:outline-none cursor-pointer">
            <option>English</option>
            <option>বাংলা</option>
          </select>
          
          <span className="text-[#9CA3AF] select-none">|</span>
          
          {/* Search Button */}
          <button className="text-[#3D2C2E] p-2 hover:bg-[#FFD166] rounded-full transition-colors">
            {/* Replace with an actual search icon from a library like react-icons */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          
          <span className="text-[#9CA3AF] select-none">|</span>

          {/* Sign Up Button */}
          <button className="bg-[#FF6B6B] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#E05252] transition-colors">
            Sign Up
          </button>
          
          {/* Sign In Link */}
          <a href="#" className="text-[#3D2C2E] hover:text-[#9CA3AF] font-medium transition-colors">
            Sign In
          </a>
        </div>
        </div>


        <div className="flex justify-between items-center py-2 px-8 border-b border-[#9CA3AF]">
        {/* Navigation Links */}
        <nav >

            <ul className="flex space-x-8">
                <li> <NavLink className="text-[#3D2C2E] font-medium hover:text-[#06D6A0] transition-colors" to="/" > Home </NavLink> </li>
                <li> <NavLink className="text-[#3D2C2E] font-medium hover:text-[#06D6A0] transition-colors" to="/books"> Books </NavLink> </li>
                <li> <NavLink className="text-[#3D2C2E] font-medium hover:text-[#06D6A0] transition-colors" to="/about"> About </NavLink> </li>
                <li> <NavLink className="text-[#3D2C2E] font-medium hover:text-[#06D6A0] transition-colors" to="/contact"> Contact </NavLink> </li>

            </ul>
        </nav>
        
        {/* Cute Bird Image */}
        <div>
          <img 
            src={birdCharacterImage} 
            alt="Cute Bird Character" 
            className="h-10 md:h-12"
          />
        </div>
      </div>

      
        </header>
    )
}

export default Header;