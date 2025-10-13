import React, { useState } from 'react';
const imgurl = 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b';
const imgurlsale = 'https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/5112f196d53068a0c14b.png';
const imgurlproduct = 'https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mejoqaf19d6u54_tn';

const Category = () => {
    const categories = Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        image: imgurl,
        name: `Thời trang nam`
    }));

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
        <div className='w-full h-auto bg-[#f2f2f2] pt-[1.25rem]'>
            <div className='w-[70%] bg-white m-auto pb-0 h-auto'>
                <h3 className='pr-0 pb-[10px] pt-[10px] pl-[20px] text-[#7d7d7d] font-bold'>DANH MỤC</h3>
                <div className='justify-center relative'>
                    <ul className='grid grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))] list-none pl-0 m-0 border-t border-t-[rgba(0,0,0,0.05)]'>
                        {categories.map((item) => (
                            <li
                                key={item.id}
                                className='category-item flex-none basis-[120px] h-[160px] border-r border-r-[rgba(0,0,0,0.05)] border-b border-b-[rgba(0,0,0,0.05)] py-5 px-[10px] text-center'
                            >
                                <a
                                    href=""
                                    className='no-underline text-[#333] flex flex-col items-center justify-center h-full transition-transform duration-200 hover:-translate-y-[5px]'
                                >
                                    <img
                                        className='w-[90px] h-[90px] object-contain mb-2'
                                        src={item.image}
                                        alt=""
                                    />
                                    <p className='text-sm m-0'>{item.name}</p>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <button className='absolute top-1/2 left-[-16px] p-[6px] text-[10px] w-[30px] rounded-[15px] border-2 border-[rgba(0,0,0,0.05)] cursor-pointer text-[#7d7d7d] bg-white z-10 transform -translate-y-1/2 transition-transform duration-200 ease-in-out hover:scale-[2.0]'>
                        &#10094;
                    </button>
                    <button className='absolute top-1/2 right-[-16px] p-[6px] text-[10px] w-[30px] rounded-[15px] border-2 border-[rgba(0,0,0,0.05)] cursor-pointer text-[#7d7d7d] bg-white z-10 transform -translate-y-1/2 transition-transform duration-200 ease-in-out hover:scale-[2.0]'>
                        &#10095;
                    </button>
                </div>
            </div>
            <div className="w-[70%] bg-white mt-5 mx-auto mb-0 py-[10px] px-4 relative">
                <div className="flex justify-between items-center">
                    <img className="h-[25px] w-auto" src={imgurlsale} alt="" />
                    <a className="text-[#ee4d2d] no-underline hover:no-underline" href="">
                    Xem tất cả &#10095;
                    </a>
                </div>

                <div className="relative">
                    <div className="overflow-hidden">
                        <div className="overflow-x-auto overflow-y-hidden hide-scrollbar">
                            <ul
                            className="flex list-none pl-0 m-0"
                            style={{
                                transform: `translateX(-${current * 100}%)`,
                                transition: "transform 0.5s ease",
                            }}
                            >
                            {products.map((p, index) => (
                                <li
                                className="flex-[0_0_calc(100%/6)] box-border pt-[20px] px-[5px] pb-[5px] text-center"
                                key={index}
                                >
                                <a
                                    className="no-underline text-[#333] flex flex-col items-center"
                                    href=""
                                >
                                    <img className="w-[200px] h-auto mb-2" src={p.img} alt="" />
                                    <p className="text-base text-[#ee4d2d] mb-0">{p.price}</p>
                                    <span className="inline-block py-[2px] px-[7px] rounded-full bg-primary-gradient text-white font-bold text-[10px] uppercase text-center tracking-[0.5px] shadow-md">
                                    {p.tag}
                                    </span>
                                </a>
                                </li>
                            ))}
                            </ul>
                        </div>
                    </div>

                    {current > 0 && (
                    <button
                        className="absolute top-1/2 left-[-16px] p-[6px] text-[10px] w-[30px] rounded-[15px] border-2 border-[rgba(0,0,0,0.05)] cursor-pointer text-[#7d7d7d] bg-white z-30 transform -translate-y-1/2 transition-transform duration-200 ease-in-out hover:scale-[2.0]"
                        onClick={prevProduct}
                    >
                        &#10094;
                    </button>
                    )}
                    {current < totalProduct - 1 && (
                    <button
                        className="absolute top-1/2 right-[-16px] p-[6px] text-[10px] w-[30px] rounded-[15px] border-2 border-[rgba(0,0,0,0.05)] cursor-pointer text-[#7d7d7d] bg-white z-30 transform -translate-y-1/2 transition-transform duration-200 ease-in-out hover:scale-[2.0]"
                        onClick={nextProduct}
                    >
                        &#10095;
                    </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Category;
