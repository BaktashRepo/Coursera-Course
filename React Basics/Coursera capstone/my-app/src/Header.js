import React from 'react'
import logo from './Assets/logo1.png'
import './index.css'
import {BrowserRouter as router, Switch ,Link, Route, Routes } from 'react-router-dom'
import BookingPage from './BookingPage'
import BookingForm from './BookingForm'

function Header() {
  return (
    <div className='container'>
        <img className='logo' src={logo} />

   

        <ul>
            <li>
              <Link to={Home}>Home</Link>
              </li>
            <li><a href="/">About</a></li>
            <li><Link to={'/booking'}>Reservations</Link>
              </li>
            <li><a href>Order Online</a></li>
            <li><a href>Login</a></li>
        </ul>

      <Routes>
      <Route path='/booking' element={<BookingPage />}>
      </Route>
    </Routes>
    </div>
  )
}

function Home() 
{
  return (<h2>Home</h2>)
}

export default Header