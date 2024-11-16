import React from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";

const RoadmapSlider = () => {
  const settings: any = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1535,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings} className="w-[100%] lg:w-[100%] mx-auto z-50">
        <div className="px-[20px] lg:px-[30px] xl:px-[35px]">
          <div className="flex flex-col items-center">
            <p
              className="text-[#E4EAF8] uppercase keania_one text-[24px] md:text-[28px] 2xl:text-[35px] mb-4"
              data-aos="fade-down"
              data-aos-duration="1200"
              data-aos-easing="ease-in-sine"
            >
              Phase 1
            </p>
            <div className="border border-[#fff] bg-[#0E0E12] rounded-full flex justify-center font-bold text-[16px] 2xl:text-[20px] items-center min-w-[50px] min-h-[50px] max-w-[50px] max-h-[50px] 2xl:min-w-[66px] 2xl:min-h-[66px] 2xl:max-w-[66px] 2xl:max-h-[66px]">
              01
            </div>
            <p
              className="mt-4 text-[#7A7A7A] text-[16px] md:text-[18px] 2xl:text-[20px] font-medium"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-easing="ease-in-sine"
            >
              (Q3 2023)
            </p>
            <p
              className="mt-4 text-[16px] md:text-[18px] 2xl:text-[20px] font-bold"
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-easing="ease-in-sine"
            >
              Contract Deployment & Initial Development
            </p>
            <p
              className="mt-4 text-[#AEAEAE] text-[15px] 2xl:text-[16px] font-[300]"
              data-aos="fade-up"
              data-aos-duration="2100"
              data-aos-easing="ease-in-sine"
            >
              Deploy Dex-AI contract on the Ethereum blockchain. Initiate
              third-party contract audits. Assemble the development team for
              platform and AI model. Begin development of the initial Dex-AI
              platform interface. Start training of the AI model based on
              available Ethereum project data.
            </p>
          </div>
        </div>
        <div className="px-[20px] lg:px-[30px] xl:px-[35px]">
          <div className="flex flex-col items-center">
            <p
              className="text-[#E4EAF8] uppercase keania_one text-[24px] md:text-[28px] 2xl:text-[35px] mb-4"
              data-aos="fade-down"
              data-aos-duration="1200"
              data-aos-easing="ease-in-sine"
            >
              Phase 2
            </p>
            <div className="border border-[#8657F1] bg-[#0E0E12] rounded-full flex justify-center font-bold text-[16px] 2xl:text-[20px] items-center min-w-[50px] min-h-[50px] max-w-[50px] max-h-[50px] 2xl:min-w-[66px] 2xl:min-h-[66px] 2xl:max-w-[66px] 2xl:max-h-[66px]">
              02
            </div>
            <p
              className="mt-4 text-[#7A7A7A] text-[16px] md:text-[18px] 2xl:text-[20px] font-medium"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-easing="ease-in-sine"
            >
              (Q3 2023)
            </p>
            <p
              className="mt-4 text-[16px] md:text-[18px] 2xl:text-[20px] font-bold"
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-easing="ease-in-sine"
            >
              Contract Deployment & Initial Development
            </p>
            <p
              className="mt-4 text-[#AEAEAE] text-[15px] 2xl:text-[16px] font-[300]"
              data-aos="fade-up"
              data-aos-duration="2100"
              data-aos-easing="ease-in-sine"
            >
              Deploy Dex-AI contract on the Ethereum blockchain. Initiate
              third-party contract audits. Assemble the development team for
              platform and AI model. Begin development of the initial Dex-AI
              platform interface. Start training of the AI model based on
              available Ethereum project data.
            </p>
          </div>
        </div>
        <div className="px-[20px] lg:px-[30px] xl:px-[35px]">
          <div className="flex flex-col items-center">
            <p
              className="text-[#E4EAF8] uppercase keania_one text-[24px] md:text-[28px] 2xl:text-[35px] mb-4"
              data-aos="fade-down"
              data-aos-duration="1200"
              data-aos-easing="ease-in-sine"
            >
              Phase 3
            </p>
            <div className="border border-[#1BB8A0] bg-[#0E0E12] rounded-full flex justify-center font-bold text-[16px] 2xl:text-[20px] items-center min-w-[50px] min-h-[50px] max-w-[50px] max-h-[50px] 2xl:min-w-[66px] 2xl:min-h-[66px] 2xl:max-w-[66px] 2xl:max-h-[66px]">
              03
            </div>
            <p
              className="mt-4 text-[#7A7A7A] text-[16px] md:text-[18px] 2xl:text-[20px] font-medium"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-easing="ease-in-sine"
            >
              (Q3 2023)
            </p>
            <p
              className="mt-4 text-[16px] md:text-[18px] 2xl:text-[20px] font-bold"
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-easing="ease-in-sine"
            >
              Contract Deployment & Initial Development
            </p>
            <p
              className="mt-4 text-[#AEAEAE] text-[15px] 2xl:text-[16px] font-[300]"
              data-aos="fade-up"
              data-aos-duration="2100"
              data-aos-easing="ease-in-sine"
            >
              Deploy Dex-AI contract on the Ethereum blockchain. Initiate
              third-party contract audits. Assemble the development team for
              platform and AI model. Begin development of the initial Dex-AI
              platform interface. Start training of the AI model based on
              available Ethereum project data.
            </p>
          </div>
        </div>
        <div className="px-[20px] lg:px-[30px] xl:px-[35px]">
          <div className="flex flex-col items-center">
            <p
              className="text-[#E4EAF8] uppercase keania_one text-[24px] md:text-[28px] 2xl:text-[35px] mb-4"
              data-aos="fade-down"
              data-aos-duration="1200"
              data-aos-easing="ease-in-sine"
            >
              Phase 4
            </p>
            <div className="border border-[#fff] bg-[#0E0E12] rounded-full flex justify-center font-bold text-[16px] 2xl:text-[20px] items-center min-w-[50px] min-h-[50px] max-w-[50px] max-h-[50px] 2xl:min-w-[66px] 2xl:min-h-[66px] 2xl:max-w-[66px] 2xl:max-h-[66px]">
              04
            </div>
            <p
              className="mt-4 text-[#7A7A7A] text-[16px] md:text-[18px] 2xl:text-[20px] font-medium"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-easing="ease-in-sine"
            >
              (Q3 2023)
            </p>
            <p
              className="mt-4 text-[16px] md:text-[18px] 2xl:text-[20px] font-bold"
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-easing="ease-in-sine"
            >
              Contract Deployment & Initial Development
            </p>
            <p
              className="mt-4 text-[#AEAEAE] text-[15px] 2xl:text-[16px] font-[300]"
              data-aos="fade-up"
              data-aos-duration="2100"
              data-aos-easing="ease-in-sine"
            >
              Deploy Dex-AI contract on the Ethereum blockchain. Initiate
              third-party contract audits. Assemble the development team for
              platform and AI model. Begin development of the initial Dex-AI
              platform interface. Start training of the AI model based on
              available Ethereum project data.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default RoadmapSlider;
