import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderAdmin from '../../components/layout/HeaderAdmin'
import MenuAdmin from '../../components/layout/MenuAdmin'

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