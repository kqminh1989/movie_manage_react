import React from 'react'

const LeftSitebarComponent = () => (
	<div className="left-sidebar">
    {/* Sidebar scroll*/}
    <div className="scroll-sidebar">
      {/* Sidebar navigation*/}
      <nav className="sidebar-nav">
        <ul id="sidebarnav">
          <li className="nav-devider" />
          <li className="nav-label">Thư Mục Chính</li>
          <li> <a className="has-arrow  "  aria-expanded="false"><i className="fa fa-tv" /><span className="hide-menu">Quản lý thông tin </span></a>
            <ul aria-expanded="false" className="collapse">
              <li><a href="index.html">Thể Loại </a></li>
              <li><a href="index1.html">Tags </a></li>
              <li><a href="index1.html">Phim </a></li>
            </ul>
          </li>
        </ul>
      </nav>
      {/* End Sidebar navigation */}
    </div>
    {/* End Sidebar scroll*/}
  </div>
)

export default LeftSitebarComponent