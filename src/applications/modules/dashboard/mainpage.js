import React, { Fragment } from 'react'
import Headerpage from '../../shares/headerpage'

import Sidebarpage from '../../shares/sidebarpage'
import { Outlet } from 'react-router-dom'
function Mainpage() {
  return (
    <Fragment>
      <Headerpage></Headerpage>
      <div className='container-fluid mt-5 '>
        <div className='row div'>
          <div className='col-md-2 border'>
            <Sidebarpage></Sidebarpage>
          </div>
          <div className='col-md-10 border'>
            <h1><Outlet /></h1>
          </div>

        </div>
      </div>
    </Fragment>
  )
}

export default Mainpage
