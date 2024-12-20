import classNames from 'classnames/bind';
import style from './Home.module.scss';
import Header from '~/component/Layout/Header/Header';
import Footer from '~/component/Layout/Footer/Footer';
import React, { useRef } from 'react';
import './Home.css';
import Slider from 'react-slick';
import { ArrowLeft, ArrowRight } from '~/component/Icon';
import {
    leafHomeRight,
    leafHomeLeft,
    Headerleft,
    plasticbottle,
    AluminumCan,
    cornerTitle,
    leafProductRight,
    leafProductLeft,
    HomeVoucer,
} from '~/Images';
import Banner1 from '~/component/Banner/Banner1';
import Banner2 from '~/component/Banner/Banner2';
import Contribute from '~/component/Contribute/Contribute';
import Banner3 from '~/component/Banner/Banner3';
const cx = classNames.bind(style);

function HomePage() {
    const sliderRef = useRef<Slider | null>(null);

    // Custom Arrow Next
    const CustomArrowNext = () => {
        return (
            <div
                style={{
                    background: '#FFFFFF',
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    right: '60px',
                    color: 'red',
                    width: '50px',
                    height: '50px',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    boxShadow: '2px 2px 10px 0px #006F6221',
                    zIndex: 10, // Đảm bảo nó ở trên các phần tử khác
                }}
                onClick={handleNextClick}
            >
                <ArrowLeft />
            </div>
        );
    };

    // Custom Arrow Prev
    const CustomArrowPrev = () => {
        return (
            <div
                style={{
                    background: '#FFFFFF',
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    left: '60px',
                    color: 'red',
                    width: '50px',
                    height: '50px',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    boxShadow: '2px 2px 10px 0px #006F6221',
                    zIndex: 1,
                }}
                onClick={handlePrevClick}
            >
                <ArrowRight />
            </div>
        );
    };

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        nextArrow: <CustomArrowNext />,
        prevArrow: <CustomArrowPrev />,
    };

    // Xử lý sự kiện khi nhấn Next
    const handleNextClick = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    // Xử lý sự kiện khi nhấn Prev
    const handlePrevClick = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };
    return (
        <>
            <Header />
            <div className="max-w-[100vw] bg-red-50">
                <div className="home-banner-slider">
                    <Slider ref={sliderRef} {...settings}>
                        <Banner3 />
                        <Banner2 />
                        <Banner1 />
                    </Slider>
                </div>
                <div
                    className="bg-[#f2fffd] py-[56px] bg-no-repeat bg-[position:0_100%] bg-[size:10%_auto]"
                    style={{
                        backgroundImage: `url(${leafHomeLeft}), url(${leafHomeRight})`,
                        backgroundPosition: '0 100%, 100% 100%',
                        backgroundSize: '10% auto, 10% auto',
                    }}
                >
                    {/* //day la khung duoc padding */}
                    <div className="max-w-[134rem] mx-auto px-[30px]">
                        {/* //cac thanh phan */}
                        {/* thanh phan */}
                        <div className="flex relative mx-auto mb-[40px] w-[65%] h-[74px] filter-home-title ">
                            <img className="w-[33.7396px] ml-[-1px] h-[100%]" src={Headerleft} alt="" />
                            <div
                                className="bg-[#fff] flex items-center flex-1
                            border-b-solid border-b-[5px] 
                             border-[#e0e0e0] justify-center relative
                             h-[100%]
                             w-[100%]
                             "
                            >
                                <h2 className="text-[3rem] text-[#009383] leading-[43.20px] font-extrabold pt-[3px] overflow-hidden uppercase text-center">
                                    Tổng Số Lượng Thu Gom
                                </h2>
                            </div>
                            <img className="mr-[-1px] h-[100%] w-[33.7396px] scale-x-[-1]" src={Headerleft} alt="" />
                        </div>
                        {/* chai nhua ,lon nhom */}
                        {/* item1 */}
                        <div className="flex items-center justify-center gap-[80px] w-[100%] mb-[120px]">
                            <div className="relative w-[50%] pt-[36px] pb-[16px] pl-[32px] h-[100%]">
                                <div className="h-[100%] absolute rotate-[16deg] bottom-[-15px] left-[-1px] z-10">
                                    <img
                                        className="object-contain w-[100%] h-[100%] object-bottom"
                                        src={plasticbottle}
                                        alt=""
                                    />
                                </div>

                                <div
                                    className={cx(
                                        'text-center flex justify-center items-center bg-[#04b19f] border-[5px] border-solid border-[#fff] rounded-[26px] shadown-home-bottle flex-col overflow-hidden relative min-h-[180px]',
                                        style.customBefore,
                                        style.customAfter,
                                    )}
                                >
                                    <div className=" min-h-[24.5rem] items-center flex justify-center flex-col">
                                        <div className="text-[7rem] leading-[57.6px]  text-[#fff] font-bold overflow-hidden whitespace-nowrap">
                                            438.425
                                        </div>
                                        <div className="text-[3.5rem] leading-[57.6px] text-[#fff] font-bold overflow-hidden whitespace-nowrap">
                                            Chai nhựa
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* //item2 */}
                            <div className="relative w-[50%] pt-[36px] pb-[16px] pl-[32px] h-[100%]">
                                <div className="h-[100%] absolute rotate-[16deg] bottom-[-15px] left-[-1px] z-10">
                                    <img
                                        className="object-contain w-[100%] h-[100%] object-bottom"
                                        src={AluminumCan}
                                        alt=""
                                    />
                                </div>

                                <div
                                    className={cx(
                                        'text-center flex justify-center items-center bg-[#04b19f] border-[5px] border-solid border-[#fff] rounded-[26px] shadown-home-bottle flex-col overflow-hidden relative min-h-[180px]',
                                        style.customBefore,
                                        style.customAfter,
                                    )}
                                >
                                    <div className=" min-h-[24.5rem] items-center flex justify-center flex-col">
                                        <div className="text-[7rem] leading-[57.6px] text-[#fff] font-bold overflow-hidden whitespace-nowrap">
                                            47.332
                                        </div>
                                        <div className="text-[3.5rem] leading-[57.6px] text-[#fff] font-bold overflow-hidden whitespace-nowrap">
                                            Lon nhom
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* thanh phan */}
                        <div className="flex relative mx-auto mb-[40px] w-[65%] h-[74px] filter-home-title ">
                            <img className="w-[33.7396px] ml-[-1px] h-[100%]" src={Headerleft} alt="" />
                            <div
                                className="bg-[#fff] flex items-center flex-1
                            border-b-solid border-b-[5px] 
                             border-[#e0e0e0] justify-center relative
                             h-[100%]
                             w-[100%]
                             "
                            >
                                <h2 className="text-[3rem] text-[#009383] leading-[43.20px] font-extrabold pt-[3px] overflow-hidden uppercase text-center">
                                    Thang đóng góp
                                </h2>
                            </div>
                            <img className="mr-[-1px] h-[100%] w-[33.7396px] scale-x-[-1]" src={Headerleft} alt="" />
                        </div>
                        {/* thanh phan */}

                        <div className="mb-[120px]">
                            <Contribute />
                        </div>
                        <div className="flex relative mx-auto mb-[40px] w-[65%] h-[74px] filter-home-title ">
                            <img className="w-[33.7396px] ml-[-1px] h-[100%]" src={Headerleft} alt="" />
                            <div
                                className="bg-[#fff] flex items-center flex-1
                            border-b-solid border-b-[5px] 
                             border-[#e0e0e0] justify-center relative
                             h-[100%]
                             w-[100%]
                             "
                            >
                                <h2 className="text-[3rem] text-[#009383] leading-[43.20px] font-extrabold pt-[3px] overflow-hidden uppercase text-center">
                                    Quà tặng
                                </h2>
                            </div>
                            <img className="mr-[-1px] h-[100%] w-[33.7396px] scale-x-[-1]" src={Headerleft} alt="" />
                        </div>
                        <div className="pb-[120px] h-[50rem] mx-auto] max-w-[145.5rem relative]">
                            <div className="flex items-center w-[100%] p-[100px] gap-[4.5rem] height-[50rem]">
                                <div className="w-[50%]">
                                    <img src={HomeVoucer} alt="" />
                                </div>
                                <div className="flex flex-col w-[50%] gap-[1.7rem]">
                                    <h3 className="text-[#009383] text-[4.4rem] font-bold w-[90%]">
                                        Voucher quà tặng từ MOMO
                                    </h3>
                                    <div className="text-[#13250] text-[2.4rem] font-bold">
                                        Hãy cùng nhau thu gom những chai nhựa/lon nhôm để nhận nhiều voucher có giá trị
                                        cao.
                                    </div>
                                    <button
                                        className="flex items-center bg-[#009383] border
                                     border-[#fff] text-[#fff] text-[1.8rem] gap-[0.8rem] min-h-[5.2rem]
                                        min-w-[20rem] justify-center whitespace-nowrap
                                        p-[1rem] w-[16rem] rounded-[0.8rem]
                                     "
                                    >
                                        Đổi quà
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default HomePage;
