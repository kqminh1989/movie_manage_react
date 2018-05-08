import React from 'react'

const ExcelImportComponent = (props) => (
	<div className="row">
    <div className="col-lg-6">
      <div className="card">
        <div className="card-title">
          <h4>Sử Dụng Excel</h4>
        </div>
        <div className="card-body">
          <div className="basic-form">
            <form onSubmit = { props.submitFunc }>
              <div className="form-group">
                <p className="text-muted m-b-15 f-s-12">Thông Tin File Excel Phải Nhập Đúng Định Dạng</p>
                <input type="file" name='file' onChange = { props.changeFunc } className="form-control input-default " placeholder="Input Default" />
              </div>
              <button type="submit" className="btn btn-primary m-b-10 m-l-5">Nhập Thông Tin Excel</button>
              <button type="button" data-toggle="modal" data-target="#myModal" className="btn btn-success m-b-10 m-l-5">Nhập Thông Tin Bình Thường</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ExcelImportComponent