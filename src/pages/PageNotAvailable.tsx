import React from 'react'
import '../styles/PageNotAvailable.css'
import error from '../pictures/error-404.svg'

const PageNotAvailable = () => {
  return (
    <div className='error-main-cont'>
      <img src={error} alt="" className='error-page-img'/>
      <a className='notavailable-link-home'>&#x2190;
Back to Home</a>
    </div>
  )
}

export default PageNotAvailable