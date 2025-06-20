import React from 'react'

import Navbar from '../Navbar/Navbar'
import Content from '../Content/Content'
import Footer from '../Footer/Footer'

const LayoutDefault = () => {
  return (
    <div>
      <Navbar/>

      <Content/>
      {/* Content có outlet đã chứa các nội dung của các trang  */}
      
      <Footer />
    </div>
  )
}

export default LayoutDefault
