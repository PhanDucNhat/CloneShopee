import React, { useState } from 'react';
import logo from '../../assets/logoshoppe.png';

const Header = () => {
    const [showCart, setShowCart] = useState(false);
    const imgUrl = 'https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-mcrmexy0kn8c23_tn.webp'; 

  return (
    <section>
        <div className='w-full bg-primary-gradient py-[10px] fixed left-0 top-[36px] z-40 shadow-md'>
            <div className='w-[70%] m-auto flex justify-between items-center'>
                <a href=""><img className='w-[162px] h-auto' src={logo} alt="" /></a>
                <div className='flex-1 flex flex-col mx-[40px]'>
                    <form action="" className='relative w-full'>
                        <input className='w-full py-[10px] pr-[40px] pl-[12px] border-0 rounded outline-none' type="text" placeholder='Làm đẹp - Mặc chất' />
                        <button className='absolute top-[50%] right-[5px] -translate-y-1/2 bg-[#fb5533] border-none text-white py-2 px-3 rounded cursor-pointer hover:opacity-80' type='submit'>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                    <div className="flex gap-4 mt-[5px] text-sm ">
                        <a className='link-custom' href="#">Kính Cường Lực iPhone</a>
                        <a className='link-custom' href="#">Dép Bánh Mì</a>
                        <a className='link-custom' href="#">Phụ Kiện Xe Wave</a>
                        <a className='link-custom' href="#">Dép Burberry Nam</a>
                        <a className='link-custom' href="#">Ốp Lưng iPhone</a>
                    </div>
                </div>
                <div className='relative text-xl cursor-pointer mr-[50px] text-white'>
                    <div className='relative inline-block'
                        onMouseOver={() => setShowCart(true)}
                        onMouseOut={() => setShowCart(false)}
                    >
                    <a href="">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span className="absolute top-[-12px] right-[-20px] bg-white text-red-500 text-xs font-bold px-[6px] py-[2px] rounded-[20px] shadow-md">10</span>
                    </a>
                    {showCart && (
                        <div className='absolute top-full right-[20px] mt-[5px] bg-white p-[5px] rounded shadow-lg z-10 w-[300px]'>
                        <ul className='m-0 p-0'>
                            <h6 className='text-[#867d7c] pt-[10px] pb-0 px-[10px]'>Sản phẩm mới thêm</h6>
                            <li className='border-b border-b-[#eee] last:border-b-0'>
                                <a className='flex p-2 no-underline text-inherit hover:bg-[#f5f5f5]' href="">
                                    <img className='h-[50px] w-[50px] flex-shrink-0' src={imgUrl} alt=""/>
                                    <div className='flex-1 flex flex-col ml-[10px]'>
                                        <p className='text-black m-0 text-sm'>Dép quai ngang SAHADOR</p>
                                        <span className='text-[#f53d2d] text-[15px] pt-[10px] text-end'>123.000<sup>đ</sup></span>
                                    </div>
                                </a>
                            </li>
                            <li className='border-b border-b-[#eee] last:border-b-0'>
                                <a className='flex p-2 no-underline text-inherit hover:bg-[#f5f5f5]' href="">
                                    <img className='h-[50px] w-[50px] flex-shrink-0' src={imgUrl} alt=""/>
                                    <div className='flex-1 flex flex-col ml-[10px]'>
                                        <p className='text-black m-0 text-sm'>Dép quai ngang SAHADOR</p>
                                        <span className='text-[#f53d2d] text-[15px] pt-[10px] text-end'>123.000<sup>đ</sup></span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <div className='flex justify-between items-center p-[10px]'>
                            <p className='text-black text-xs m-0'>10 thêm vào giỏ hàng</p>
                            <button className='text-white bg-[#f53d2d] w-[130px] h-[30px] border-none rounded cursor-pointer text-sm hover:opacity-80' type='submit'>Xem giỏ hàng</button>
                        </div>
                        </div>
                    )}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Header