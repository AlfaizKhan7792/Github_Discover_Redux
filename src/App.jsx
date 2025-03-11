import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import PageNotFound from './Pages/PageNotFound'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import Home from './Pages/Home'
import AboutPage from './Pages/AboutPage'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { ToastContainer } from 'react-toastify'
import PrivateRoute from './Components/PrivateRoute'
import TermsOfService from './Pages/TermsOfService'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import UserProfileCard from './Pages/UserProfileCard'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='*' element={<PageNotFound />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/' element={<PrivateRoute />} >
          <Route path='/' element={<Home />} />
          <Route path='/userprofile/:username' element={<UserProfileCard />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/privacy' element={<PrivacyPolicy />} />
          <Route path='/terms' element={<TermsOfService />} />
          </Route>
        </Routes>
        <Footer />
        <ToastContainer />
      </Router>
    </>
  )
}

export default App
