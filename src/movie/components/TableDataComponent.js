import React from 'react'

const TableDataComponent = () => (
	<div className="row">
    <div className="col-12">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Danh Sách Phim</h4>
          <h6 className="card-subtitle">Tổng Hợp Danh Sách Tất Cả Phim</h6>
          <div className="table-responsive m-t-40">
            <table id="example23" className="display nowrap table table-hover table-striped table-bordered" cellSpacing={0} width="100%">
              <thead>
                <tr>
                  <th>Hình Ảnh</th>
                  <th>Tên</th>
                  <th>Nội Dung</th>
                  <th>Thể Loại</th>
                  <th>Tags</th>
                  <th>Xếp Hạng</th>
                  <th>Sửa</th>
                  <th>Xóa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{textAlign: 'center'}}><img alt='icon' src="assets/images/users/avatar.jpg" style={{width: 100}} className="img-circle" /></td>
                  <td>Helena 1</td>
                  <td>
                    <a  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-newspaper-o fa-2x" /></a>
                    <div className="nav-item dropdown mega-dropdown">
                      <div className="dropdown-menu animated zoomIn">
                        <ul className="mega-dropdown-menu row">
                          <li className="col-lg-3  m-b-30">
                            <img alt='icon' src="assets/images/users/6.jpg" style={{width: 300}} />
                          </li>
                          <li className="col-lg-9  m-b-30">
                            {/* Contact */}
                            <span>Sam Allardyce muốn Everton chủ động gây áp lực từ xa để hạn chế lối chơi chuyền bóng của đối thủ. Tuy nhiên, trong một ngày mà David Silva, Fernandinho và Kevin De Bruyne chơi tốt, Man City đã chiếm quyền kiểm soát bóng 82,13% trong cả trận. Đây là tỷ lệ kiểm soát bóng cao nhất của đội khách trong một trận Ngoại hạng Anh tính từ khi thống kê này bắt đầu được đưa ra vào mùa giải 2003/2004. Leroy Sane sớm đưa đội khách dẫn trước bằng một cú vô-lê hiểm hóc sau đường chuyền ngang của David Silva. Bàn thắng bắt nguồn từ một pha phối hợp đậm chất Guardiola khi Silva cầm bóng và xoay trở trước ba cầu thủ Everton rồi chuyền ra cánh cho Aymeric Laporte. Tiền vệ người Tây Ban Nha sau đó di chuyển vào vòng cấm, chiếm khoảng trống giữa trung vệ và hậu vệ biên Everton trước khi kiến tạo cho đồng đội.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </td>
                  <td>Anime</td>
                  <td>Anime, Dead Or Alive</td>
                  <td>3 Star</td>
                  <td><a><i className="fa fa-wrench fa-2x" /></a></td>
                  <td><a><i className="fa fa-trash fa-2x" /></a></td>
                </tr>
                <tr>
                  <td style={{textAlign: 'center'}}><img alt='icon' src="images/users/6.jpg" style={{width: 100}} className="img-circle" /></td>
                  <td>Helena 1</td>
                  <td>
                    <a  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-newspaper-o fa-2x" /></a>
                    <div className="nav-item dropdown mega-dropdown">
                      <div className="dropdown-menu animated zoomIn">
                        <ul className="mega-dropdown-menu row">
                          <li className="col-lg-3  m-b-30">
                            <img alt='icon' src="assets/images/users/6.jpg" style={{width: 300}} />
                          </li>
                          <li className="col-lg-9  m-b-30">
                            {/* Contact */}
                            <span>Sam Allardyce muốn Everton chủ động gây áp lực từ xa để hạn chế lối chơi chuyền bóng của đối thủ. Tuy nhiên, trong một ngày mà David Silva, Fernandinho và Kevin De Bruyne chơi tốt, Man City đã chiếm quyền kiểm soát bóng 82,13% trong cả trận. Đây là tỷ lệ kiểm soát bóng cao nhất của đội khách trong một trận Ngoại hạng Anh tính từ khi thống kê này bắt đầu được đưa ra vào mùa giải 2003/2004. Leroy Sane sớm đưa đội khách dẫn trước bằng một cú vô-lê hiểm hóc sau đường chuyền ngang của David Silva. Bàn thắng bắt nguồn từ một pha phối hợp đậm chất Guardiola khi Silva cầm bóng và xoay trở trước ba cầu thủ Everton rồi chuyền ra cánh cho Aymeric Laporte. Tiền vệ người Tây Ban Nha sau đó di chuyển vào vòng cấm, chiếm khoảng trống giữa trung vệ và hậu vệ biên Everton trước khi kiến tạo cho đồng đội.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </td>
                  <td>Anime</td>
                  <td>Anime, Dead Or Alive</td>
                  <td>3 Star</td>
                  <td><a><i className="fa fa-wrench fa-2x" /></a></td>
                  <td><a><i className="fa fa-trash fa-2x" /></a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default TableDataComponent