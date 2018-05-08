import React from 'react'

const HeaderComponent = () => (
	<div className="header">
    <nav className="navbar top-navbar navbar-expand-md navbar-light">
      {/* Logo */}
      <div className="navbar-header">
        <a className="navbar-brand" href="index.html">
          {/* Logo icon */}
          <b><img src="assets/images/logo.png" alt="homepage" className="dark-logo" /></b>
          {/*End Logo icon */}
          {/* Logo text */}
          <span><img src="assets/images/logo-text.png" alt="homepage" className="dark-logo" /></span>
        </a>
      </div>
      {/* End Logo */}
      <div className="navbar-collapse">
        {/* toggle and nav items */}
        <ul className="navbar-nav mr-auto mt-md-0">
          {/* This is  */}
          <li className="nav-item"> <a className="nav-link nav-toggler hidden-md-up text-muted  "><i className="mdi mdi-menu" /></a> </li>
          <li className="nav-item m-l-10"> <a className="nav-link sidebartoggler hidden-sm-down text-muted  " ><i className="ti-menu" /></a> </li>
          {/* Search */}
          <li className="nav-item hidden-sm-down search-box"> <a className="nav-link hidden-sm-down text-muted  " ><i className="ti-search" /></a>
            <form className="app-search">
              <input type="text" className="form-control" placeholder="Search here" /> <a className="srh-btn"><i className="ti-close" /></a> </form>
          </li>
          {/* Language */}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-muted  "  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="flag-icon flag-icon-us" /></a>
            <div className="dropdown-menu animated zoomIn">
              <a className="dropdown-item" ><i className="flag-icon flag-icon-ca" /> Canada</a>
              <a className="dropdown-item" ><i className="flag-icon flag-icon-fr" /> French</a>
              <a className="dropdown-item" ><i className="flag-icon flag-icon-cn" /> China</a>
              <a className="dropdown-item" ><i className="flag-icon flag-icon-de" /> Dutch</a>
            </div>
          </li>
          {/* Messages */}
          <li className="nav-item dropdown mega-dropdown"> <a className="nav-link dropdown-toggle text-muted  "  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-th-large" /></a>
            <div className="dropdown-menu animated zoomIn">
              <ul className="mega-dropdown-menu row">
                <li className="col-lg-3  m-b-30">
                  <h4 className="m-b-20">CONTACT US</h4>
                  {/* Contact */}
                  <form>
                    <div className="form-group">
                      <input type="text" className="form-control" id="exampleInputname1" placeholder="Enter Name" /> </div>
                    <div className="form-group">
                      <input type="email" className="form-control" placeholder="Enter email" /> </div>
                    <div className="form-group">
                      <textarea className="form-control" id="exampleTextarea" rows={3} placeholder="Message" defaultValue={""} />
                    </div>
                    <button type="submit" className="btn btn-info">Submit</button>
                  </form>
                </li>
                <li className="col-lg-3 col-xlg-3 m-b-30">
                  <h4 className="m-b-20">List style</h4>
                  {/* List style */}
                  <ul className="list-style-none">
                    <li><a ><i className="fa fa-check text-success" /> This Is Another Link</a></li>
                    <li><a ><i className="fa fa-check text-success" /> This Is Another Link</a></li>
                    <li><a ><i className="fa fa-check text-success" /> This Is Another Link</a></li>
                    <li><a ><i className="fa fa-check text-success" /> This Is Another Link</a></li>
                    <li><a ><i className="fa fa-check text-success" /> This Is Another Link</a></li>
                  </ul>
                </li>
                <li className="col-lg-3 col-xlg-3 m-b-30">
                  <h4 className="m-b-20">List style</h4>
                  {/* List style */}
                  <ul className="list-style-none">
                    <li><a ><i className="fa fa-check text-success" /> This Is Another Link</a></li>
                    <li><a ><i className="fa fa-check text-success" /> This Is Another Link</a></li>
                    <li><a ><i className="fa fa-check text-success" /> This Is Another Link</a></li>
                    <li><a ><i className="fa fa-check text-success" /> This Is Another Link</a></li>
                    <li><a ><i className="fa fa-check text-success" /> This Is Another Link</a></li>
                  </ul>
                </li>
                <li className="col-lg-3 col-xlg-3 m-b-30">
                  <h4 className="m-b-20">List style</h4>
                  {/* List style */}
                  <ul className="list-style-none">
                    <li><a ><i className="fa fa-check text-success" /> This Is Another Link</a></li>
                    <li><a ><i className="fa fa-check text-success" /> This Is Another Link</a></li>
                    <li><a ><i className="fa fa-check text-success" /> This Is Another Link</a></li>
                    <li><a ><i className="fa fa-check text-success" /> This Is Another Link</a></li>
                    <li><a ><i className="fa fa-check text-success" /> This Is Another Link</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>
          {/* End Messages */}
        </ul>
        {/* User profile and search */}
        <ul className="navbar-nav my-lg-0">
          {/* Comment */}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-muted text-muted  "  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fa fa-bell" />
              <div className="notify"> <span className="heartbit" /> <span className="point" /> </div>
            </a>
            <div className="dropdown-menu dropdown-menu-right mailbox animated zoomIn">
              <ul>
                <li>
                  <div className="drop-title">Notifications</div>
                </li>
                <li>
                  <div className="message-center">
                    {/* Message */}
                    <a >
                      <div className="btn btn-danger btn-circle m-r-10"><i className="fa fa-link" /></div>
                      <div className="mail-contnet">
                        <h5>This is title</h5> <span className="mail-desc">Just see the my new admin!</span> <span className="time">9:30 AM</span>
                      </div>
                    </a>
                    {/* Message */}
                    <a >
                      <div className="btn btn-success btn-circle m-r-10"><i className="ti-calendar" /></div>
                      <div className="mail-contnet">
                        <h5>This is another title</h5> <span className="mail-desc">Just a reminder that you have event</span> <span className="time">9:10 AM</span>
                      </div>
                    </a>
                    {/* Message */}
                    <a >
                      <div className="btn btn-info btn-circle m-r-10"><i className="ti-settings" /></div>
                      <div className="mail-contnet">
                        <h5>This is title</h5> <span className="mail-desc">You can customize this template as you want</span> <span className="time">9:08 AM</span>
                      </div>
                    </a>
                    {/* Message */}
                    <a >
                      <div className="btn btn-primary btn-circle m-r-10"><i className="ti-user" /></div>
                      <div className="mail-contnet">
                        <h5>This is another title</h5> <span className="mail-desc">Just see the my admin!</span> <span className="time">9:02 AM</span>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <a className="nav-link text-center" > <strong>Check all notifications</strong> <i className="fa fa-angle-right" /> </a>
                </li>
              </ul>
            </div>
          </li>
          {/* End Comment */}
          {/* Messages */}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-muted  "  id={2} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fa fa-envelope" />
              <div className="notify"> <span className="heartbit" /> <span className="point" /> </div>
            </a>
            <div className="dropdown-menu dropdown-menu-right mailbox animated zoomIn">
              <ul>
                <li>
                  <div className="drop-title">You have 4 new messages</div>
                </li>
                <li>
                  <div className="message-center">
                    {/* Message */}
                    <a >
                      <div className="user-img"> <img src="assets/images/users/5.jpg" alt="user" className="img-circle" /> <span className="profile-status online pull-right" /> </div>
                      <div className="mail-contnet">
                        <h5>Michael Qin</h5> <span className="mail-desc">Just see the my admin!</span> <span className="time">9:30 AM</span>
                      </div>
                    </a>
                    {/* Message */}
                    <a >
                      <div className="user-img"> <img src="images/users/2.jpg" alt="user" className="img-circle" /> <span className="profile-status busy pull-right" /> </div>
                      <div className="mail-contnet">
                        <h5>John Doe</h5> <span className="mail-desc">I've sung a song! See you at</span> <span className="time">9:10 AM</span>
                      </div>
                    </a>
                    {/* Message */}
                    <a >
                      <div className="user-img"> <img src="images/users/3.jpg" alt="user" className="img-circle" /> <span className="profile-status away pull-right" /> </div>
                      <div className="mail-contnet">
                        <h5>Mr. John</h5> <span className="mail-desc">I am a singer!</span> <span className="time">9:08 AM</span>
                      </div>
                    </a>
                    {/* Message */}
                    <a >
                      <div className="user-img"> <img src="images/users/4.jpg" alt="user" className="img-circle" /> <span className="profile-status offline pull-right" /> </div>
                      <div className="mail-contnet">
                        <h5>Michael Qin</h5> <span className="mail-desc">Just see the my admin!</span> <span className="time">9:02 AM</span>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <a className="nav-link text-center" > <strong>See all e-Mails</strong> <i className="fa fa-angle-right" /> </a>
                </li>
              </ul>
            </div>
          </li>
          {/* End Messages */}
          {/* Profile */}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-muted  "  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="assets/images/users/5.jpg" alt="user" className="profile-pic" /></a>
            <div className="dropdown-menu dropdown-menu-right animated zoomIn">
              <ul className="dropdown-user">
                <li><a ><i className="ti-user" /> Profile</a></li>
                <li><a ><i className="ti-wallet" /> Balance</a></li>
                <li><a ><i className="ti-email" /> Inbox</a></li>
                <li role="separator" className="divider" />
                <li><a ><i className="ti-settings" /> Setting</a></li>
                <li role="separator" className="divider" />
                <li><a ><i className="fa fa-power-off" /> Logout</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
)

export default HeaderComponent