import React, { useState } from "react";
import qr from '../../assets/qr.png';

const Navbar = () => {
  const [showImage, setShowImage] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const imageNotification = 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-liy168tjbx765a_tn';

  return (
    <nav className="w-full bg-primary-gradient fixed top-0 left-0 z-50">
      <div className="w-[70%] m-auto flex justify-between items-center text-sm text-white py-2">
        <ul className="flex gap-3 items-center">
          <li className="hover:opacity-80">
            <a href="">Kênh người bán</a>
          </li>
          <li 
            className="relative"
            onMouseEnter={() => setShowImage(true)}
            onMouseLeave={() => setShowImage(false)}
          >
            <a href="">Tải ứng dụng</a>
            {showImage && (
              <div
                className="absolute left-0 top-full mt-1 bg-white p-2 rounded shadow-md z-10"
                onMouseEnter={() => setShowImage(true)}
                onMouseLeave={() => setShowImage(false)}
              >
                <img className="block max-w-[150px] h-auto" src={qr} alt="Tải ứng dụng" />
              </div>
            )}
          </li>
          
          <li>
            <span>Kết nối</span>
            <a className="mr-2 ml-2" href=""><i className="fa-brands fa-facebook"></i></a>
            <a href=""><i className="fa-brands fa-instagram"></i></a>
          </li>
        </ul>
        <div className='flex items-center'>
          <i className="fa-solid fa-bell mr-1 cursor-pointer"></i>
          <div className='relative inline-block'
               onMouseOver={() => setIsHovering(true)}
               onMouseOut={() => setIsHovering(false)}
          >
            <a className="pr-2 hover:opacity-80" href="">Thông Báo</a>

            {isHovering && (
              <div className='absolute top-full right-[10px] mt-[5px] bg-white p-[5px] rounded shadow-md z-10 w-[300px]'>
                <ul className='m-0 p-0'>
                  <li className="border-b border-b-[#eee] last:border-b-0">
                    <a className="flex items-center p-2 no-underline text-inherit hover:bg-[#f5f5f5]" href="">
                      <img className="h-12 w-12 flex-shrink-0" src={imageNotification} alt=""/>
                      <div className='flex-1 flex flex-col m-[5px]'>
                          <h6 className="text-red-600 my-[5px] text-sm">Tặng bạn voucher 550k</h6>
                          <p className="text-[#867d7c] m-0 text-xs">Voucher có hiệu lực trong 24 giờ</p>
                      </div>
                    </a>
                  </li>
                  <li className="border-b border-b-[#eee] last:border-b-0">
                    <a className="flex items-center p-2 no-underline text-inherit hover:bg-[#f5f5f5]" href="">
                      <img className="h-12 w-12 flex-shrink-0" src={imageNotification} alt=""/>
                      <div className='flex-1 flex flex-col m-[5px]'>
                          <h6 className="text-red-600 my-[5px] text-sm">Tặng bạn voucher 550k</h6>
                          <p className="text-[#867d7c] m-0 text-xs">Voucher có hiệu lực trong 24 giờ</p>
                      </div>
                    </a>
                  </li>
                </ul>
                <button className='block mt-2 mx-auto text-black bg-[#dbd7d7] w-[250px] border-none rounded-md py-[6px] cursor-pointer hover:opacity-80' type='submit'>Xem tất cả</button>
              </div>
            )}
          </div>
          <i className="fa-solid fa-question mr-1 cursor-pointer"></i>
          <a className="pr-2 hover:opacity-80" href="">Hỗ Trợ</a>
          <i className="fa-solid fa-globe mr-1 cursor-pointer"></i>
          <div className='relative inline-block'
               onMouseEnter={() => setShowLanguage(true)}
               onMouseLeave={() => setShowLanguage(false)}
          >
            <a href="">Tiếng Việt <i className="fa-solid fa-chevron-down mr-1 cursor-pointer"></i></a>
            {showLanguage && (
              <div className='absolute top-full right-[10px] mt-[5px] bg-white p-[5px] rounded shadow-2xl z-10 w-[150px]'>
                <ul className='m-0 p-0'>
                  <li className="border-b-[#eee] last:border-b-0">
                    <a className="flex items-center p-2 no-underline text-black hover:text-[#ff6533]" href="">
                      Tiếng Việt
                    </a>
                  </li>
                  <li className="border-b-[#eee] last:border-b-0">
                    <a className="flex items-center p-2 no-underline text-black hover:text-[#ff6533]" href="">
                      Tiếng Anh
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <i className="fa-regular fa-user mr-1 cursor-pointer"></i>
          <div className='relative inline-block'
               onMouseEnter={() => setShowProfile(true)}
               onMouseLeave={() => setShowProfile(false)}
          >
            <a href="">user</a>
            {showProfile && (
              <div className='absolute top-full right-[10px] mt-[5px] bg-white p-[5px] rounded-[5px] shadow-2xl z-10 w-[150px]'>
                <ul className='m-0 p-0'>
                  <li className="border-b-[#eee] last:border-b-0">
                    <a className="flex items-center p-2 no-underline text-black hover:text-[#2aa704] hover:bg-[#dbd7d7]" href="">
                      Tài khoản của tôi
                    </a>
                  </li>
                  <li className="border-b-[#eee] last:border-b-0">
                    <a className="flex items-center p-2 no-underline text-black hover:text-[#2aa704] hover:bg-[#dbd7d7]" href="">
                      Đơn mua
                    </a>
                  </li>
                  <li className="border-b-[#eee] last:border-b-0">
                    <a className="flex items-center p-2 no-underline text-black hover:text-[#2aa704] hover:bg-[#dbd7d7]" href="">
                      Đăng xuất
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
