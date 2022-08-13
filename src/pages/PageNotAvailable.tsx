import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/PageNotAvailable.css'
import error from '../pictures/error-404.svg'

const PageNotAvailable = () => {
  return (
    <div className='error-main-cont'>
      <img src={error} alt="" className='error-page-img'/>
      <Link to="/" className='notavailable-link-home'>&#x2190; Back to Home</Link>
    </div>
  )
}

export default PageNotAvailable