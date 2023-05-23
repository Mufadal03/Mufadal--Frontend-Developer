import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../pages/Layout'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

const AllRoutes = () => {
  return (
      <Routes>
          <Route path='/' element={<Layout />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
   </Routes>
  )
}

export default AllRoutes