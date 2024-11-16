"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/public/logo.png";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (document.documentElement.scrollTop > 0) {
        const header = document.querySelector("header");
        if (header) {
          header.classList.add("shrink");
        }
      } else {
        const header = document.querySelector("header");
        if (header) {
          header.classList.remove("shrink");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setNavbar(!navbar);
  };

  const onSidebarClick = () => {
    setNavbar(!navbar);
  };

  return (
    <header className="w-full z-[999] mx-auto text-white px-[20px] md:px-[50px] lg:px-[50px] xl:px-[70px] 2xl:px-[80px] overflow-hidden">
      <div className="px-[0px] md:px-[10px] lg:px-[20px] xl:px-[30px] 2xl:px-[80px] mx-auto homepage-container border-b border-[#d9d9d925] h-[80px] md:h-[90px] 2xl:h-[100px] flex items-center">
        <div className="w-full flex flex-row justify-between items-center gap-[20px]">
          <div className="w-full lg:w-auto flex justify-between lg:justify-start items-center">
            <div
              className="flex items-center gap-x-[12px]"
              data-aos="fade-down"
              data-aos-duration="700"
              data-aos-easing="ease-in-sine"
            >
              <a href="/">
                <Image
                  src={logo}
                  alt="logo"
                  className="min-h-[27px] min-w-[30px] max-h-[27px] max-w-[30px] lg:min-h-[32px] lg:min-w-[35px] lg:max-h-[32px] lg:max-w-[35px] 2xl:min-h-[37px] 2xl:min-w-[40px] 2xl:max-h-[37px] 2xl:max-w-[40px]"
                />
              </a>
              <p className="text-[18px] lg:text-[20px] xl:text-[28px] 2xl:text-[32px] uppercase keania_one">
                COIN <span className="gradient-text">GAURD</span>
              </p>
            </div>
            <button
              onClick={toggleSidebar}
              className="focus:outline-none block lg:hidden"
            >
              <svg
                width="28"
                height="29"
                viewBox="0 0 28 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[29px] h-[29px]"
              >
                <path
                  d="M5.80872 20.521H22.073"
                  stroke="#e4eaf8"
                  stroke-width="2.32347"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.80872 14.7124H22.073"
                  stroke="#e4eaf8"
                  stroke-width="2.32347"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.80872 8.90356H22.073"
                  stroke="#e4eaf8"
                  stroke-width="2.32347"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:justify-center lg:items-center lg:gap-[15px]">
            <a href="/">
              <button
                className={`uppercase whitespace-nowrap py-[12px] px-[20px] lg:py-[12px] lg:px-[20px] xl:py-[16px] xl:px-[28px] custom-btn1 bg-transparent flex justify-center items-center rounded-[20px] lg:rounded-[27px] cursor-pointer font-medium text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px] text-white hover:text-white`}
                data-aos="fade-down"
                data-aos-duration="900"
                data-aos-easing="ease-in-sine"
              >
                <span className="custom-btn-inner1">Access BOT</span>
              </button>
            </a>
            <a href="/">
              <button
                className={`uppercase whitespace-nowrap py-[12px] px-[20px] lg:py-[12px] lg:px-[20px] xl:py-[16px] xl:px-[20px] custom-btn2 bg-transparent flex justify-center items-center rounded-[20px] lg:rounded-[27px] cursor-pointer font-medium text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px] text-white hover:text-white`}
                data-aos="fade-down"
                data-aos-duration="1200"
                data-aos-easing="ease-in-sine"
              >
                <span className="custom-btn-inner2">Join Commuity</span>
              </button>
            </a>
          </div>
        </div>
        <div
          className={`${
            navbar ? "active-profile-sidebar" : "not-active-profile-sidebar"
          }`}
        >
          <div
            className="profile-sidebar-inner relative"
            onClick={onSidebarClick}
          >
            <div className="absolute right-[20px] top-[25px] md:right-[45px] md:top-[27px]">
              <button
                onClick={toggleSidebar}
                className="focus:outline-none block lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 29 29"
                  fill="none"
                  className="w-[29px] h-[29px]"
                >
                  <path
                    d="M21.375 13.5L5.625 13.5"
                    stroke="#e4eaf8"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.375 20.25L5.625 13.5L12.375 6.75"
                    stroke="#e4eaf8"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-y-[30px]">
              <div className="flex flex-col justify-center items-center gap-[15px] xl:gap-[15px]">
                <a href="/">
                  <button
                    className={`uppercase whitespace-nowrap py-[12px] px-[20px] lg:py-[12px] lg:px-[20px] xl:py-[16px] xl:px-[28px] custom-btn1 bg-transparent flex justify-center items-center rounded-[20px] lg:rounded-[27px] cursor-pointer font-medium text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px] text-white hover:text-white`}
                    data-aos="fade-down"
                    data-aos-duration="900"
                    data-aos-easing="ease-in-sine"
                  >
                    <span className="custom-btn-inner1">Access BOT</span>
                  </button>
                </a>
                <a href="/">
                  <button
                    className={`uppercase whitespace-nowrap py-[12px] px-[20px] lg:py-[12px] lg:px-[16px] xl:py-[16px] xl:px-[20px] custom-btn2 bg-transparent flex justify-center items-center rounded-[20px] lg:rounded-[24px] cursor-pointer font-semibold text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[17px] text-white hover:text-black`}
                    data-aos="fade-down"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-sine"
                  >
                    <span className="custom-btn-inner2">Join Commuity</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
