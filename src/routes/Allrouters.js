import React from 'react'
import { useRoutes } from 'react-router-dom'
// import PrivateRoutes from './PrivateRoutes'
import {PublicRoutes} from "./PublicRoutes"

const Allrouters = () => {
  // dùng useRoutes để sử dụng routes riêng or có thể dùng router bọc routes trực tiếp tại App()
    const routes = useRoutes(PublicRoutes);
  return (
    <div>
      {routes}
    </div>
  )
}

export default Allrouters
