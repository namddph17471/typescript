import React from 'react'
import { Outlet } from 'react-router-dom'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

type Props = {}

const WebsiteLayout = (props: Props) => {
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