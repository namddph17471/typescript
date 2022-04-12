import React from 'react'
import { Outlet } from 'react-router-dom'
import Banner from '../../components/layout/Banner'
import Footer from '../../components/layout/Footer'
import Header from '../../components/layout/Header'

// type Props = {}

const WebsiteLayout = () => {
  return (
    <div>
        <header>
            < Header />   
            <Banner />         
        </header>

        <main className='mt-3'>
            <Outlet />
        </main>
        <footer>
            <Footer/>
        </footer>
    </div>
  )
}

export default WebsiteLayout