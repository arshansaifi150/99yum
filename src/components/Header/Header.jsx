import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Hamberger from '../../Components copy/Hamberger'
import logo from '../../assets/logo.png'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: 'Recipe',
      slug: "/recipe",
      active: true
    },
    {
      name: "Blog",
      slug: "/all-posts",
      active: true,
   },
    {
      name: 'About',
      slug: "/about-us",
      active: true
    },
    {
      name: 'Contact',
      slug: "/Contact",
      active:true
   }, 
   ]

  const addPost =[{
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
      },
      {
        name: "Login",
        slug: "/login",
        active: !authStatus,
      },
      {
        name: "Signup",
        slug: "/signup",
        active: !authStatus,
      },
    ]
  

  return (
    <header className=' '>
      
        <nav className='md:flex md:items-center bg-white md:justify-between md:flex-wrap hidden'>
        <div className=' hidden md:block'>
            <Link to='/'>
              <img src={logo} alt="" className='h-24 w-24' />
            </Link>
          </div>
          <ul className='hidden md:flex'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className={`inline-bock px-6 py-2 duration-200 hover:bg-orange-400 rounded-full font-semibold `}
                >{item.name}</button>
              </li>
            ) : null
            )}
            {/* {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )} */}
          </ul>
          
          <div className='flex'>
            <ul className='md:flex hidden '>
          {addPost.map((item) => 
            item.active ? (
              <li key={item.name} >
                <button
                onClick={() => navigate(item.slug)}
                // className={`inline-bock px-6 py-2 duration-200 hover:bg-orange-400 rounded-full `}
                className='bg-gradient-to-r from-orange-500 to-red-500 px-3 py-1 md:px-6 md:py-2 m-1 rounded-full text-white shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl'
                >{item.name}</button>
              </li>
            ) : null
            )}
            </ul>
          {authStatus && (
              <div>
                <LogoutBtn/>
              </div>
              
            )}
          </div>
        </nav>
        <Hamberger/>
        
    </header>
  )
}

export default Header
