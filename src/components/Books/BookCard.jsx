// import React from 'react'

// function BookCard() {
//   return (
//     <div>
//       <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out border border-muted-gray/30">
//       <img 
//         src={book.coverImage} 
//         alt={book.title} 
//         className="w-full h-48 object-cover object-center" 
//       />
//       <div className="p-4">
//         <h3 className="text-xl font-semibold text-text-dark mb-2 leading-tight">{book.title}</h3>
//         <p className="text-sm text-text-dark/80 mb-4 line-clamp-3">{book.description}</p>
//         <button className="w-full bg-secondary-accent text-text-dark py-2 rounded-md font-medium hover:bg-primary-accent hover:text-primary-bg transition-colors duration-300">
//           Read Now
//         </button>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default BookCard


import React from 'react';

function BookCard({ book }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out border border-muted-gray/30 h-[420px] flex flex-col justify-between p-4">
      {/* Book Cover */}
      <img
        src={book.coverImage}
        alt={book.title}
        className="w-full h-[230px] object-cover object-center rounded-md mb-3"
      />

      {/* Book Info */}
      <div className="flex flex-col flex-grow justify-between">
        <h3 className="text-lg font-semibold text-text-dark mb-1 leading-snug line-clamp-2">
          {book.title}
        </h3>
        <p className="text-sm text-text-dark/80 mb-4 line-clamp-3">
          {book.description}
        </p>

        {/* Action Button */}
        <button className="w-full bg-secondary-accent text-text-dark py-2 rounded-md font-medium hover:bg-primary-accent hover:text-primary-bg transition-colors duration-300">
          Read Now
        </button>
      </div>
    </div>
  );
}

export default BookCard;
