import React, { Component } from 'react'
import Header from '../../common/containers/Header'
import LeftSitebar from '../../common/containers/LeftSitebar'
import ExcelImport from '../containers/ExcelImport'
import ExcelProcess from '../containers/ExcelProcess'
import BasicImport from '../containers/BasicImport'
import TableData from '../containers/TableData'

class Index extends Component {
	render() {
		return (
			<div id="main-wrapper">
        <Header/>
        <LeftSitebar/>
        {/* End Left Sidebar  */}
        {/* Page wrapper  */}
        <div className="page-wrapper">
          {/* Bread crumb */}
          <div className="row page-titles">
            <div className="col-md-5 align-self-center">
              <h3 className="text-primary">Quản Lý Movie</h3> 
            </div>
          </div>
          {/* End Bread crumb */}
          {/* Container fluid  */}
          <div className="container-fluid">
            {/* Start Page Content */}
            <ExcelImport/>
            <ExcelProcess/>
            {/* End PAge Content */}
            <BasicImport/>
            {/* Start Page Content */}
            <TableData/>
            {/* End PAge Content */}
          </div>
          {/* End Container fluid  */}
          {/* footer */}
          <footer className="footer"> © 2018 All rights reserved.</footer>
          {/* End footer */}
        </div>
        {/* End Page wrapper  */}
      </div>
		)
	}
}

export default Index