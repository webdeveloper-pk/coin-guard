import Image from "next/image";
import tok1 from "@/public/tok-line1.png";
import tok2 from "@/public/tok-line2.png";

const Tokenomics = () => {
  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <div className="flex flex-col items-center">
        <div className="w-full py-[30px] md:py-[40px] 2xl:py-[50px]">
          <h2
            className="uppercase keania_one text-[32px] md:text-[36px] 2xl:text-[48px] text-[#E4EAF8] relative w-full flex justify-center items-center py-16"
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-easing="ease-in-sine"
          >
            <div
              className="animation-container absolute inset-0 w-full"
              style={{ zIndex: -1 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100% 100%"
                preserveAspectRatio="none"
                className="w-full h-full"
              >
                <symbol id="text5">
                  <text
                    textAnchor="middle"
                    x="50%"
                    y="50%"
                    dy=".37em"
                    className="text-[52px] md:text-[80px] lg:text-[120px] xl:text-[130px] 2xl:text-[200px]"
                  >
                    Tokonomics
                  </text>
                </symbol>
                <use xlinkHref="#text5" className="text"></use>
                <use xlinkHref="#text5" className="text"></use>
                <use xlinkHref="#text5" className="text"></use>
                <use xlinkHref="#text5" className="text"></use>
              </svg>
            </div>
            Tokonomics
          </h2>
        </div>
        <div className="pt-[50px] md:pt-[60px] 2xl:pt-[100px] mx-auto text-center">
          <div
            className="w-full"
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
          >
            <Image src={tok1} alt="tok1" className="w-full" />
          </div>
          <div className="pb-[20px] w-full flex flex-col xl:flex-row gap-y-10 gap-x-10 xl:gap-x-12 2xl:gap-[100px] xl:items-center xl:justify-center homepage-container px-[20px] md:px-[50px] lg:px-[50px] xl:px-[70px] 2xl:px-[80px]">
            <div className="flex flex-col md:flex-row items-center md:justify-between gap-5 xl:gap-7 2xl:gap-[70px]">
              <div
                className="text-center xl:text-left w-full md:w-1/3 xl:w-auto"
                data-aos="fade-down"
                data-aos-duration="700"
                data-aos-easing="ease-in-sine"
              >
                <p className="font-[700] text-[15px] md:text-[18px] xl:md:text-[17px] 2xl:text-[21px]">
                  30% -
                </p>
                <p className="font-[500] text-[14px] md:text-[16px] xl:md:text-[15px] 2xl:text-[18px]">
                  Community & Ecosystem
                </p>
              </div>
              <div
                className="text-center xl:text-left w-full md:w-1/3 xl:w-auto"
                data-aos="fade-down"
                data-aos-duration="900"
                data-aos-easing="ease-in-sine"
              >
                <p className="font-[700] text-[15px] md:text-[18px] xl:md:text-[17px] 2xl:text-[21px]">
                  20% -
                </p>
                <p className="font-[500] text-[14px] md:text-[16px] xl:md:text-[15px] 2xl:text-[18px]">
                  Dex
                </p>
              </div>
              <div
                className="text-center xl:text-left w-full md:w-1/3 xl:w-auto"
                data-aos="fade-down"
                data-aos-duration="1100"
                data-aos-easing="ease-in-sine"
              >
                <p className="font-[700] text-[15px] md:text-[18px] xl:md:text-[17px] 2xl:text-[21px]">
                  7% -
                </p>
                <p className="font-[500] text-[14px] md:text-[16px] xl:md:text-[15px] 2xl:text-[18px]">
                  Product Development
                </p>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1300"
              data-aos-easing="ease-in-sine"
            >
              <p className="font-[500] text-[16px] md:text-[20px] 2xl:text-[24px]">
                Total Supply
              </p>
              <p className="text-[#E4EAF8] keania_one text-[24px] md:text-[26px] xl:text-[24px] 2xl:text-[36px]">
                100,000,000
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center md:justify-between gap-5 xl:gap-7 2xl:gap-[70px]">
              <div
                className="text-center xl:text-left w-full md:w-1/3 xl:w-auto"
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-easing="ease-in-sine"
              >
                <p className="font-[700] text-[15px] md:text-[18px] xl:md:text-[17px] 2xl:text-[21px]">
                  10% -
                </p>
                <p className="font-[500] text-[14px] md:text-[16px] xl:md:text-[15px] 2xl:text-[18px]">
                  Treasury
                </p>
              </div>
              <div
                className="text-center xl:text-left w-full md:w-1/3 xl:w-auto"
                data-aos="fade-down"
                data-aos-duration="1700"
                data-aos-easing="ease-in-sine"
              >
                <p className="font-[700] text-[15px] md:text-[18px] xl:md:text-[17px] 2xl:text-[21px]">
                  30% -
                </p>
                <p className="font-[500] text-[14px] md:text-[16px xl:md:text-[15px]] 2xl:text-[18px]">
                  Community & Ecosystem
                </p>
              </div>
              <div
                className="text-center xl:text-left w-full md:w-1/3 xl:w-auto"
                data-aos="fade-down"
                data-aos-duration="1900"
                data-aos-easing="ease-in-sine"
              >
                <p className="font-[700] text-[15px] md:text-[18px] xl:md:text-[17px] 2xl:text-[21px]">
                  30% -
                </p>
                <p className="font-[500] text-[14px] md:text-[16px] xl:md:text-[15px] 2xl:text-[18px]">
                  Community & Ecosystem
                </p>
              </div>
            </div>
          </div>
          <div
            className="w-full"
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
          >
            <Image src={tok2} alt="tok2" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
