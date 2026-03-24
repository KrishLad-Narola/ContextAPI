import React, { useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, Outlet } from 'react-router-dom';




function AppLayout() {
  return (
    <div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </nav>
      {/* <main>
          <Outlet />
        </main> */}

      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default AppLayout