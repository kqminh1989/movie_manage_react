import React from 'react'

const BasicImportComponent = () => (
	<div className="row">
    <div className="col-lg-6">
      <div className="card">
        <div className="card-title">
          <h4>Basic Form</h4>
        </div>
        <div className="card-body">
          <div className="basic-form">
            <form>
              <div className="form-group">
                <label>Tên Phim</label>
                <input type="text" className="form-control" placeholder="Movie Name" />
              </div>
              <div className="form-group">
                <label>Thể Loại</label>
                <select className="form-control custom-select">
                  <option>--Chọn Thể Loại--</option>
                  <option>English</option>
                  <option>Nhật Bản</option>
                  <option>Anime</option>
                </select>
              </div>
              <div className="form-group">
                <label>Tags</label>
                <div className="row">
                  <div className="col-lg-3">
                    <label><input type="checkbox" /> Check me out</label>		
                  </div>
                  <div className="col-lg-3">
                    <label><input type="checkbox" /> Check me out</label>		
                  </div>	
                  <div className="col-lg-3">
                    <label><input type="checkbox" /> Check me out</label>		
                  </div>	
                  <div className="col-lg-3">
                    <label><input type="checkbox" /> Check me out</label>		
                  </div>	
                  <div className="col-lg-3">
                    <label><input type="checkbox" /> Check me out</label>		
                  </div>	
                </div>
              </div>
              <div className="form-group">
                <label>Xếp Hạng</label>
                <div className="row">
                  <div className="col-lg-3">
                    <label><input type="checkbox" /> 1 Star</label>		
                  </div>
                  <div className="col-lg-3">
                    <label><input type="checkbox" /> 2 Star</label>		
                  </div>	
                  <div className="col-lg-3">
                    <label><input type="checkbox" /> 3 Star</label>		
                  </div>	
                  <div className="col-lg-3">
                    <label><input type="checkbox" /> 4 Star</label>		
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-default">Tìm Kiếm</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default BasicImportComponent