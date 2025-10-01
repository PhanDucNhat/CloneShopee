import React from 'react'
import './Navbar.css'
// import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-container">
        <ul className='navbar-menu'>
          <li><a href="">Kênh Người Bán</a></li>
          <li><a href="">Tải ứng dụng</a></li>
          <li>
            <span>Kết nối</span>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
          </li>
        </ul>
        <div className='navbar-right'>
          <i className="fa-solid fa-bell"></i>
          <a href="">Thông Báo</a>
          <i className="fa-solid fa-question"></i>
          <a href="">Hỗ Trợ</a>
          <i className="fa-solid fa-globe"></i>
          <a href="">Tiếng Việt <i className="fa-solid fa-chevron-down"></i></a>
          <i className="fa-regular fa-user"></i>
          <span className="username">user</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar