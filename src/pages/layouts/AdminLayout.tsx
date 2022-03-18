import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderAdmin from '../../components/HeaderAdmin'
import MenuAdmin from '../../components/MenuAdmin'

type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <div>
        <header>
            <HeaderAdmin/>
        </header>
        <aside className='float-left h-[640px]'>
            <MenuAdmin />
        </aside>
        <main>
            < Outlet />
        </main>
    </div>
  )
}

export default AdminLayout