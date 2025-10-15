import React from "react";
import logoImage from '../../assets/StoryNestLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer(){
    return(
        <div>
             <footer className="bg-primary-bg pt-16 pb-12 border-t-4 border-text-dark text-text-dark">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">

                {/* Column 1: Logo, Description, and Socials */}
                <div className="col-span-1 lg:col-span-2 pr-6 md:border-r border-muted-gray/40">
                    <div className="flex items-center mb-2">
                        <div className="flex items-center">
                                             <img 
                                                src={logoImage} 
                                                alt="StoryNest Logo" 
                                                className="h-10 w-auto sm:h-10 md:h-12 lg:h-10" 
                                             />
                                             <h1 className="text-xl font-bold uppercase mb-6 text-text-dark">StoryNest</h1>
                                        </div>
                        {/* <h3 className="text-4xl font-extrabold text-text-dark">Storynest</h3> */}
                    </div>
                    <p className="text-base leading-relaxed mb-6 text-text-dark/90">
                        Storynest is your digital sanctuary for discovering and sharing captivating stories from around the world. Dive into new adventures, connect with authors, and get lost in the magic of books.
                    </p>
                    <div className="flex space-x-5">
                        <a href="#" aria-label="Facebook" className="text-2xl text-text-dark hover:text-primary-accent transition-colors duration-300">
                           <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="#" aria-label="Instagram" className="text-2xl text-text-dark hover:text-primary-accent transition-colors duration-300">
                            <FontAwesomeIcon icon={faInstagram} />
                         </a>
                        <a href="#" aria-label="Twitter" className="text-2xl text-text-dark hover:text-primary-accent transition-colors duration-300">
                            <FontAwesomeIcon icon={faTwitter} />
                         </a>
                    </div>
                </div>

                {/* Column 2: Menu Links */}
                <div className="pr-6 md:border-r border-muted-gray/40">
                    <h4 className="text-xl font-bold uppercase mb-6 text-text-dark">Menu</h4>
                    <ul>
                        <li className="mb-3 pb-2 border-b border-muted-gray/20 last:border-b-0">
                            <a href="#" className="text-lg text-text-dark hover:text-primary-accent transition-colors duration-300 block">Home</a>
                        </li>
                        <li className="mb-3 pb-2 border-b border-muted-gray/20 last:border-b-0">
                            <a href="#" className="text-lg text-text-dark hover:text-primary-accent transition-colors duration-300 block">Books</a>
                        </li>
                        <li className="mb-3 pb-2 border-b border-muted-gray/20 last:border-b-0">
                            <a href="#" className="text-lg text-text-dark hover:text-primary-accent transition-colors duration-300 block">About</a>
                        </li>
                        <li className="mb-3 pb-2 border-b border-muted-gray/20 last:border-b-0">
                            <a href="#" className="text-lg text-text-dark hover:text-primary-accent transition-colors duration-300 block">Contact</a>
                        </li>
                    </ul>
                </div>

                {/* Column 3: Subscribe and Utility Links */}
                <div className="col-span-1">
                    <h4 className="text-xl font-bold uppercase mb-6 text-text-dark">Stay Informed</h4>
                    <div className="flex mb-8">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            aria-label="Email subscription field"
                            className="p-3 border border-muted-gray/80 text-text-dark bg-primary-bg flex-grow focus:outline-none focus:ring-1 focus:ring-primary-accent placeholder-muted-gray"
                        />
                        <button
                            type="submit"
                            className="bg-secondary-accent text-text-dark font-semibold px-5 py-3 hover:bg-primary-accent hover:text-primary-bg transition-colors duration-300 whitespace-nowrap rounded-r"
                        >
                            Subscribe
                        </button>
                    </div>
                    
                    <div className="space-y-3">
                        <a href="#" className="block text-lg text-text-dark hover:text-primary-accent transition-colors duration-300">Donate</a>
                        <a href="#" className="block text-lg text-text-dark hover:text-primary-accent transition-colors duration-300">Privacy Policy</a>
                        <a href="#" className="block text-lg text-text-dark hover:text-primary-accent transition-colors duration-300">Terms and Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
            

        </div>
    )
}

export default Footer;