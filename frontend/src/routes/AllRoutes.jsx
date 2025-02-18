import React from 'react';
import { Route, Routes } from "react-router-dom";
import Signup from './Signup';
import Signin from './Signin';
import Home from './Home';
import PrivateRoute from '../components/PrivateRoute';
import PageNotFound from './PageNotFound';

export default function AllRoutes() {
  return (
    <>
      <Routes>
        {/* Protected Route */}
        <Route path='/' element={ 
          <PrivateRoute>
            <Home />
          </PrivateRoute> 
        } />
        
        {/* Unprotected Routes */}
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        
        {/* Page not found route */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
