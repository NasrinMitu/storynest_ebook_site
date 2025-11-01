import React from "react";
import {Link, NavLink} from 'react-router-dom'
import logoImage from '../../assets/StoryNestLogo.png';
import birdCharacterImage from '../../assets/BirdCharacter.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


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

            <div className="flex justify-between items-center py-2 px-24 border-b border-muted-gray">

                <div className="flex items-center">
                     <img 
                        src={logoImage} 
                        alt="StoryNest Logo" 
                        className="h-8 w-auto md:h-12 lg:h-16 my-2 transition-transform duration-300 hover:scale-110 hover:-translate-y-1" 
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

          <FontAwesomeIcon icon={faSearch} className="text-lg" />
       
          </button>
          
          <span className="text-[#9CA3AF] select-none">|</span>

          {/* Sign Up Button */}
          <button className="bg-[#FF6B6B] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#E05252] transition-colors">
            Sign Up
          </button>
          
          {/* Sign In Link */}
          <a href="#" className="text-[#3D2C2E] px-5 py-2 rounded-full font-semibold hover:bg-secondary-accent font-medium transition-colors">
            Sign In
          </a>
        </div>
        </div>


        <div className="flex justify-between items-center py-2 px-24 border-b border-[#9CA3AF]">
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
        <div className="flex items-center space-x-4">
          <a href="#" className="text-[#3D2C2E] px-5 py-2 rounded-full font-semibold hover:bg-secondary-accent font-medium transition-colors">
            Donate
          </a>
          <img 
            src={birdCharacterImage} 
            alt="Cute Bird Character" 
            className="h-10 md:h-12 lg:h-16 transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
          />
        </div>
      </div>

      
        </header>
    )
}

export default Header;