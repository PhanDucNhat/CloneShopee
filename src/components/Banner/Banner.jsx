import React, { useState } from 'react'
import './Banner.scss'
import { assets } from '../../assets/assets'
import { nextSlide, prevSlide, goToSlide} from './Banner.js'

const Banner = () => {
    const slides = [assets.banner1, assets.banner2, assets.banner3]
    const [current, setCurrent] = useState(0)
    const imageURL = 'https://cf.shopee.vn/file/vn-11134258-820l4-mesa7k74mh35b5_xhdpi';
    const imageURL1 = 'https://cf.shopee.vn/file/vn-11134258-820l4-mesa9g3ee4g214_xhdpi';
    const imageURL2 = 'https://cf.shopee.vn/file/vn-11134258-7ras8-mb6e1ufaxoldb9_xhdpi';
    const imageURL3 = 'https://cf.shopee.vn/file/vn-50009109-c02353c969d19918c53deaa4ea15bdbe_xhdpi';
    const imageURL4 = 'https://cf.shopee.vn/file/1d25d74d6900b85cfde8f967e613041d_xhdpi';
    const imageURL5 = 'https://cf.shopee.vn/file/vn-50009109-f692e9b0be05d1a11cded7f9f72b5f0b_xhdpi';
    const imageURL6 = 'https://cf.shopee.vn/file/vn-50009109-8a387d78a7ad954ec489d3ef9abd60b4_xhdpi';

  return (
    <div className='banner'>
        <div className='banner-top'>
            <div className='banner-left'>
                <div className='slides'>
                    {slides.map((slide, index) => (
                        <a
                            key={index}
                            href=''
                            style={{ display: current === index ? 'block' : 'none'}}
                        >
                            <img src={slide} alt={`banner ${index + 1}`} />
                        </a>
                    ))}
                    <button className='prev' onClick={() => setCurrent(prevSlide(current,slides.length))}>&#10094;</button>
                    <button className='next' onClick={() => setCurrent(nextSlide(current,slides.length))}>&#10095;</button>
                    <div className='dots'>
                        {slides.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${current === index ? 'active' : ''}`}
                                onClick={() => setCurrent(goToSlide(index))}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
            <div className='banner-right'>
                <a href=""><img src={assets.banner_right} alt="" /></a>
                <a href=""><img src={assets.banner_right1} alt="" /></a>
            </div>
        </div>

        <div className='banner-bottom'>
            <a href="">
                <div>
                    <img src={imageURL} alt="" />
                </div>
                <p>Deal từ 1.000Đ</p>
            </a>
            <a href="">
                <div>
                    <img src={imageURL1} alt="" />
                </div>
                <p>Shoppe xử lý</p>
            </a>
            <a href="">
                <div>
                    <img src={imageURL2} alt="" />
                </div>
                <p>Deal hot</p>
            </a>
            <a href="">
                <div>
                    <img src={imageURL3} alt="" />
                </div>
                <p>Shopee style</p>
            </a>
            <a href="">
                <div>
                    <img src={imageURL4} alt="" />
                </div>
                <p>Săn xu</p>
            </a>
            <a href="">
                <div>
                    <img src={imageURL5} alt="" />
                </div>
                <p>KH thân thiết</p>
            </a>
            <a href="">
                <div>
                    <img src={imageURL6} alt="" />
                </div>
                <p>Mã giảm giá</p>
            </a>
        </div>
    </div>
  )
}

export default Banner