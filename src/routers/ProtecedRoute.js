import React from 'react'
import { Navigate } from 'react-router-dom';
import useAuth from '../custom-hooks/useAuth'

const ProtecedRoute = ({children}) => {
  const { currentUser } = useAuth();

  return currentUser ? children : <Navigate to='login' />
}

export default ProtecedRoute