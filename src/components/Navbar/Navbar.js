import React from 'react'
import {Link} from 'react-router-dom';
function Navbar() {
  return (
    <div>
        <h1 className='text-3xl font-bold  justify-center items-center'>My Website</h1>
        <nav className='bg-black text-white p-4 flex justify-between'>
            <ul className='flex space-x-4'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/product">Product</Link></li>
                <li><Link to="/price">Order Summary</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar