import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <div>
        <header>
            header
        </header>
        <aside>
            Menu Admin
        </aside>
        <main>
            < Outlet />
        </main>
    </div>
  )
}

export default AdminLayout