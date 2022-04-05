import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderAdmin from '../../components/HeaderAdmin'
import MenuAdmin from '../../components/MenuAdmin'

// type Props = {}

const AdminLayout = () => {
  return (
    <div className=' '>
        <header>
            <HeaderAdmin/>
        </header>
        <main className=' '>
            < Outlet />
        </main>
    </div>
  )
}

export default AdminLayout