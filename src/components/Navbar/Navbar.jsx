import React, { useState } from 'react'
import './Navbar.scss'
import { assets } from '../../assets/assets';
// import { assets } from '../../assets/assets'

const Navbar = () => {
  const [showImage, setShowImage] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const imageNotification = 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-liy168tjbx765a_tn';

  return (
    <div className='navbar'>
      <div className="navbar-container">
        <ul className='navbar-menu'>
          <li><a href="">Kênh Người Bán</a></li>
          <li 
            className="app-download"
            onMouseEnter={() => setShowImage(true)}
            onMouseLeave={() => setShowImage(false)}
          >
            <a href="">Tải ứng dụng</a>
            {showImage && (
              <div className="image-dropdown">
                <img src={assets.qr} alt="Tải ứng dụng" />
              </div>
            )}
          </li>
          <li>
            <span>Kết nối</span>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
          </li>
        </ul>
        <div className='navbar-right'>
          <i className="fa-solid fa-bell"></i>
          <div className='notification-wrapper'
               onMouseOver={() => setIsHovering(true)}
               onMouseOut={() => setIsHovering(false)}
          >
            <a href="">Thông Báo</a>

            {isHovering && (
              <div className='element-dropdown'>
                <ul className='element-list'>
                  <li>
                    <a href="">
                      <img src={imageNotification} alt=""/>
                      <div className='content'>
                          <h6>Tặng bạn voucher 550k</h6>
                          <p>Voucher có hiệu lực trong 24 giờ</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src={imageNotification} alt=""/>
                      <div className='content'>
                          <h6>Tặng bạn voucher 550k</h6>
                          <p>Voucher có hiệu lực trong 24 giờ</p>
                      </div>
                    </a>
                  </li>
                </ul>
                <button className='btn' type='submit'>Xem tất cả</button>
              </div>
            )}
          </div>
          <i className="fa-solid fa-question"></i>
          <a href="">Hỗ Trợ</a>
          <i className="fa-solid fa-globe"></i>
          <div className='language-wrapper'
               onMouseEnter={() => setShowLanguage(true)}
               onMouseLeave={() => setShowLanguage(false)}
          >
            <a href="">Tiếng Việt <i className="fa-solid fa-chevron-down"></i></a>
            {showLanguage && (
              <div className='language-dropdown'>
                <ul className='language-list'>
                  <li>
                    <a href="">
                      Tiếng Việt
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Tiếng Anh
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <i className="fa-regular fa-user"></i>
          <div className='profile-wrapper'
               onMouseEnter={() => setShowProfile(true)}
               onMouseLeave={() => setShowProfile(false)}
          >
            <a href="">user</a>
            {showProfile && (
              <div className='profile-dropdown'>
                <ul className='profile-list'>
                  <li>
                    <a href="">
                      Tài khoản của tôi
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Đơn mua
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Đăng xuất
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar