import React from 'react'
import './Header.scss'
import { assets } from '../../assets/assets'

const Header = () => {
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
            <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>
          </div>
        </div>
    </div>
  )
}

export default Header