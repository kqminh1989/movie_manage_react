import React from 'react'

const ExcelProcessComponent = (props) => (
	<div className = { props.excelData.displayClass }>
		<div className="row">
	    <div className="col-lg-6">
	      <div className="card">
	        <div className="card-title">
	          <h4>File Excel Đã Được Tải Lên</h4>
	        </div>
	        <div className="card-body">
	          <div className="basic-form">
	            <form onSubmit = { props.excelDataProcessFunc }>
	              <div className="form-group">
	                <p className="text-muted m-b-15 f-s-12">{ file_name(props) } - Được upload vào 2 ngày trước</p>
	              </div>
	              <div className="form-group">
		              <p className="f-w-600">Process <span className="pull-right">85%</span></p>
					        <div className="progress ">
					          <div role="progressbar" style={{width: '32%', height: 8}} className="progress-bar bg-danger wow animated progress-animated"> <span className="sr-only">60% Complete</span> </div>
					        </div>
				        </div>
	              <button type="submit" className="btn btn-primary m-b-10 m-l-5">Cập Nhật Thông Tin Vào Database</button>
	            </form>
	          </div>
	        </div>
	      </div>
	    </div>
	  </div>
  </div>
)

function file_name(props) {
	return (props.excelData.excelData !== null) ? props.excelData.excelData.file_name : ''
}

export default ExcelProcessComponent