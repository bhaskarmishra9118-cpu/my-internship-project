import React from 'react'

const Nav = ({ cartCount = 0, onCartClick, onHomeClick }) => {
  const cartIcon = "https://cdn-icons-png.flaticon.com/512/34/34568.png";

  return (
    <div>
      <nav>
        <ul className="flex justify-between items-center bg-black text-white px-4 py-2 rounded m-3">
          <a href="#" onClick={(e) => { e.preventDefault(); onHomeClick && onHomeClick(); }} className="text-white font-bold no-underline">Home</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onCartClick && onCartClick(); }} className="flex items-center text-white no-underline">
            <img src={cartIcon} alt="cart" className="w-5 h-5 mr-2 inline-block" onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }} />
            <button className="bg-red-700 px-2.5 text-white rounded">Cart ({cartCount})</button>
          </a>
        </ul>
      </nav>
    </div>
  )
}

export default Nav;