import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../styles/BaseLayout.css'

const BaseLayout = () => {
  return (
    <div>
        <Link to="/" className='base-heading'>
            <h1>CMS</h1>
        </Link>
        <Outlet/>
    </div>
  )
}

export default BaseLayout