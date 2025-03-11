import React from 'react'
import useAuthStatus from '../Hooks/useAuthStatus'
import { Navigate, Outlet } from 'react-router-dom'
import Loading from './Loading'

const PrivateRoute = () => {

    const {loggedIn , chechStatus} = useAuthStatus()

    if(chechStatus){
        return <Loading />
    }


  return loggedIn ? <Outlet /> : <Navigate to={"/login"} />
}

export default PrivateRoute
