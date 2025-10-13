import Reac, { useState } from 'react';
import banner1 from '../../assets/banner1.webp';
import banner2 from '../../assets/banner2.webp';
import banner3 from '../../assets/banner3.webp';
import banner_right from '../../assets/banner_right.jpg';
import banner_right1 from '../../assets/banner_right1.png';
import { nextSlide, prevSlide, goToSlide} from './Banner.js'

const Banner = () => {
    const slides = [banner1, banner2, banner3]
    const [current, setCurrent] = useState(0)
    const imageURL = 'https://cf.shopee.vn/file/vn-11134258-820l4-mesa7k74mh35b5_xhdpi';
    const imageURL1 = 'https://cf.shopee.vn/file/vn-11134258-820l4-mesa9g3ee4g214_xhdpi';
    const imageURL2 = 'https://cf.shopee.vn/file/vn-11134258-7ras8-mb6e1ufaxoldb9_xhdpi';
    const imageURL3 = 'https://cf.shopee.vn/file/vn-50009109-c02353c969d19918c53deaa4ea15bdbe_xhdpi';
    const imageURL4 = 'https://cf.shopee.vn/file/1d25d74d6900b85cfde8f967e613041d_xhdpi';
    const imageURL5 = 'https://cf.shopee.vn/file/vn-50009109-f692e9b0be05d1a11cded7f9f72b5f0b_xhdpi';
    const imageURL6 = 'https://cf.shopee.vn/file/vn-50009109-8a387d78a7ad954ec489d3ef9abd60b4_xhdpi';

  return (
    <div className='w-[70%] m-auto flex gap-[5px] pt-40 px-0 pb-0 flex-col '>
        <div className='flex gap-[5px]'>
            <div className='flex-[2] relative m-auto'>
                    {slides.map((slide, index) => (
                        <a
                            key={index}
                            href=''
                            style={{ display: current === index ? 'block' : 'none'}}
                        >
                            <img className='w-full rounded align-middle ' src={slide} alt={`banner ${index + 1}`} />
                        </a>
                    ))}
                    <button className='cursor-pointer absolute top-[50%] translate-y-[-50%] left-0 w-auto py-4 px-[10px] font-bold text-xl transition-colors duration-300 ease-in-out select-none z-10 border-none hover:bg-black/80 text-white rounded-tr-[10px] rounded-br-[10px]' onClick={() => setCurrent(prevSlide(current,slides.length))}>&#10094;</button>
                    <button className='cursor-pointer absolute top-[50%] translate-y-[-50%] right-0 w-auto py-4 px-[10px] font-bold text-xl transition-colors duration-300 ease-in-out select-none z-10 border-none hover:bg-black/80 text-white rounded-tl-[10px] rounded-bl-[10px]' onClick={() => setCurrent(nextSlide(current,slides.length))}>&#10095;</button>
                    <div className='text-center absolute bottom-[15px] w-full'>
                        {slides.map((_, index) => (
                            <span
                                key={index}
                                className={`cursor-pointer h-[10px] w-[10px] my-0 mx-[2px] bg-[#bbb] rounded-[50%] inline-block transition-colors duration-[600ms] ease-in-out text-center 
                                    ${current === index ? 'bg-[#f53d2d] scale-125' : 'bg-[#bbb] hover:bg-[#f53d2d]'}`}
                                onClick={() => setCurrent(goToSlide(index))}
                            ></span>
                        ))}
                    </div>
            </div>
            <div className='flex-1 flex flex-col gap-[2px]'>
                <a href=""><img className='w-full rounded-[3px]' src={banner_right} alt="" /></a>
                <a href=""><img className='w-full rounded-[3px]' src={banner_right1} alt="" /></a>
            </div>
        </div>

        <div className='py-[10px] px-5 m-0 flex justify-between text-center'>
            <a className='w-[150px] flex flex-col items-center text-center hover:-translate-y-[5px] transition-transform duration-300' href="">
                <img className='h-[50px] w-[50px] my-[10px]' src={imageURL} alt="" />
                <p>Deal từ 1.000Đ</p>
            </a>
            <a className='w-[150px] flex flex-col items-center text-center hover:-translate-y-[5px] transition-transform duration-300' href="">
                <img className='h-[50px] w-[50px] my-[10px]' src={imageURL1} alt="" />
                <p>Shoppe xử lý</p>
            </a>
            <a className='w-[150px] flex flex-col items-center text-center hover:-translate-y-[5px] transition-transform duration-300' href="">
                <img className='h-[50px] w-[50px] my-[10px]' src={imageURL2} alt="" />
                <p>Deal hot</p>
            </a>
            <a className='w-[150px] flex flex-col items-center text-center hover:-translate-y-[5px] transition-transform duration-300' href="">
                <img className='h-[50px] w-[50px] my-[10px]' src={imageURL3} alt="" />
                <p>Shopee style</p>
            </a>
            <a className='w-[150px] flex flex-col items-center text-center hover:-translate-y-[5px] transition-transform duration-300' href="">
                <img className='h-[50px] w-[50px] my-[10px]' src={imageURL4} alt="" />
                <p>Săn xu</p>
            </a>
            <a className='w-[150px] flex flex-col items-center text-center hover:-translate-y-[5px] transition-transform duration-300' href="">
                <img className='h-[50px] w-[50px] my-[10px]' src={imageURL5} alt="" />
                <p>KH thân thiết</p>
            </a>
            <a className='w-[150px] flex flex-col items-center text-center hover:-translate-y-[5px] transition-transform duration-300' href="">
                <img className='h-[50px] w-[50px] my-[10px]' src={imageURL6} alt="" />
                <p>Mã giảm giá</p>
            </a>
        </div>
    </div>
  )
}

export default Banner