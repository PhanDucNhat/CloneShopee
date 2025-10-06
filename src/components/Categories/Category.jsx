import React, { useState } from 'react';
import './Category.scss';
// import { assets } from '../../assets/assets';
const imgurl = 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b';
const imgurlsale = 'https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/5112f196d53068a0c14b.png';
const imgurlproduct = 'https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mejoqaf19d6u54_tn';

const Category = () => {

    const categories = Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        image: imgurl,
        name: `Thời trang nam`
    }))

    const products = Array.from({ length: 18 }, () => ({
        img: imgurlproduct,
        price: `10.000đ`,
        tag: `Đang bán chạy`
    }));

    const [current, setCurrent] = useState(0);
    const itemsPerView = 6;
    const totalProduct = Math.ceil(products.length / itemsPerView);
    const prevProduct = () => {
        setCurrent((prev) => (prev > 0 ? prev - 1 : prev));
    }
    const nextProduct = () => {
        setCurrent((prev) => (prev < totalProduct - 1 ? prev + 1 : prev));
    };
    
  return (
    <div className='category'>
        <div className='category-container'>
            <h4>DANH MỤC</h4>
            <div className='category-list'>
                <ul>
                    { categories.map((item) => (
                        <li key={item.id}>
                            <a href="">
                                <div className='category-icon'>
                                    <img src={item.image} alt="" />
                                    <p class="category-name">{item.name}</p>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
                <button className='prevButton'>&#10094;</button>
                <button className='nextButton'>&#10095;</button>
            </div>
        </div>
        <div className='category-sale'>
            <div className='sale-top'>
                <img src={imgurlsale} alt="" />
                <a href="">Xem tất cả &#10095;</a>
            </div>
            <div className='product-wrapper'>
                <div className='product'>
                        <ul style={{
                            transform: `translateX(-${current * 100}%)`,
                            transition: 'transform 0.5s ease'
                        }}>
                            {products.map((p, index) => (
                                <li key={index}>
                                    <a href="">
                                        <img src={p.img} alt="" />
                                        <p>{p.price}</p>
                                        <span>{p.tag}</span>
                                    </a>
                                </li>
                            ))
                            }
                        </ul>
                </div>
                {current > 0 && (
                    <button className='prevButton' onClick={prevProduct}>&#10094;</button>
                )}
                {current < totalProduct - 1 && (
                    <button className='nextButton' onClick={nextProduct}>&#10095;</button>
                )}
            </div>
        </div>
    </div>
  )
}

export default Category