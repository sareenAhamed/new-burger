import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import cross from '../assets/cross.png'
import menu from '../assets/menu.png'


const Navbar = () => {
    const[click, setClick] = useState(false)

    function handleBurger(){
        setClick(!click)
    }


  return (
    <nav className='container mx-auto mt-5 bg-slate-400 rounded py-2 px-3 flex flex-col sm:flex-row sm:justify-between sm:items-center'>
        <div>
            <Link to='/' className='font-bold text-slate-900 text-xl'>Brand</Link>
        </div>

        {/* Burger menu */}
        <div className='relative'>
            <img className='h-4 w-4 sm:hidden absolute transform translate-x-96 -translate-y-5' src={click ? cross: menu} alt="" onClick={handleBurger} />
        </div>

        <div>
            <ul className={click ? 'flex flex-col items-center mt-7 pb-2 sm:flex-row' : "hidden sm:flex sm:flex-row"}>
                <li className='mb-2 font-semibold rounded mx-2 hover:bg-slate-300 active:bg-white focus-within:bg-white px-32 py-1 sm:px-3'>
                    <NavLink to='/link1'>Link1</NavLink>
                </li>
                <li className='mb-2 font-semibold rounded mx-2 hover:bg-slate-300 active:bg-white focus-within:bg-white px-32 py-1 sm:px-3'>
                    <NavLink to='/link2'>Link2</NavLink>
                </li>
                <li className='mb-2 font-semibold rounded mx-2 hover:bg-slate-300 active:bg-white focus-within:bg-white px-32 py-1 sm:px-3'>
                    <NavLink to='/link3'>Link3</NavLink>
                </li>
                <li className='mb-2 font-semibold rounded mx-2 hover:bg-slate-300 active:bg-white focus-within:bg-white px-32 py-1 sm:px-3'>
                    <NavLink to='/link4'>Link4</NavLink>
                </li>
                
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
