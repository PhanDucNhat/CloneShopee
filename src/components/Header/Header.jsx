import React, { useState } from 'react'
import './Header.scss'
import { assets } from '../../assets/assets'

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const imgUrl = 'https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-mcrmexy0kn8c23_tn.webp';

  return (
    <div className='header'>
        <div className='header-container'>
          <a href=""><img src={assets.logoshoppe} alt="" /></a>
          <div className="search-bar">
            <form action='#' className="search-input">
              <input type="text" placeholder="Làm Đẹp - Mặc Chất" />
              <button type='submit'>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
            <div className="header-menu">
              <a href="#">Kính Cường Lực iPhone</a>
              <a href="#">Dép Bánh Mì</a>
              <a href="#">Phụ Kiện Xe Wave</a>
              <a href="#">Dép Burberry Nam</a>
              <a href="#">Ốp Lưng iPhone</a>
            </div>
          </div>
          <div className="cart">
            <div className='cart-wrapper'
                 onMouseOver={() => setShowCart(true)}
                 onMouseOut={() => setShowCart(false)}
            >
              <a href="">
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="cart-count">10</span>
              </a>
              {showCart && (
                <div className='cart-dropdown'>
                  <ul className='cart-list'>
                    <h6>Sản phẩm mới thêm</h6>
                    <li>
                      <a href="">
                        <img src={imgUrl} alt=""/>
                        <div className='content'>
                            <p>Dép quai ngang SAHADOR</p>
                            <span>123.000<sup>đ</sup></span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img src={imgUrl} alt=""/>
                        <div className='content'>
                            <p>Dép quai ngang SAHADOR</p>
                            <span>123.000<sup>đ</sup></span>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <div className='count-cart'>
                    <p>10 thêm vào giỏ hàng</p>
                    <button className='btn' type='submit'>Xem giỏ hàng</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header