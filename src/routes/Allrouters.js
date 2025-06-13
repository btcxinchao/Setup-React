import React from 'react'
import { useRoutes } from 'react-router-dom'
// import PrivateRoutes from './PrivateRoutes'
import {PublicRoutes} from "./PublicRoutes"

const Allrouters = () => {
    const routes = useRoutes(PublicRoutes);
  return (
    <div>
      {routes}
    </div>
  )
}

export default Allrouters
