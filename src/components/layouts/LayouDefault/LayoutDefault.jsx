import React from 'react'
import './LayoutDefault.scss'

import Navbar from '../Navbar/Navbar'
import Content from '../Content/Content'
import Footer from '../Footer/Footer'
import Toast from '../Toast/Toast'
// import Footer from '../Footer/Footer'

const LayoutDefault = () => {
  return (
    <div>
      <Navbar/>

      <Content/>
      {/* Content có outlet đã chứa các nội dung của các trang  */}
      
      <Footer />
      <Toast />
    </div>
  )
}

export default LayoutDefault
