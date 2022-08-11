import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BaseLayout from '../components/BaseLayout'
import HomePage from '../pages/HomePage'
import LandingPage from '../pages/LandingPage'
import LoginPage from '../pages/LoginPage'
import RegistrationPage from '../pages/RegistrationPage'
import PageNotAvailable from '../pages/PageNotAvailable'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<BaseLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path='Landing' element={<LandingPage/>}/>
                <Route path='Login' element={<LoginPage/>}/>
                <Route path='Registration' element={<RegistrationPage/>}/>
                <Route path='*' element={<PageNotAvailable/>}/>            
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes