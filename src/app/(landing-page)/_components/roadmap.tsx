import Image from "next/image";
import RoadmapSlider from "./carousel/roadmap-slider";
import line from "@/public/roadmap-line.png";

const Roadmap = () => {
  return (
    <div className="relative w-full mx-auto overflow-hidden pt-[50px] lg:pt-[70px] 2xl:pt-[90px]">
      <div className="flex justify-center py-[30px] md:py-[40px] 2xl:py-[50px] w-full mx-auto homepage-container px-[20px] md:px-[50px] lg:px-[50px] xl:px-[70px] 2xl:px-[80px]">
        <h2
          className="uppercase keania_one text-[32px] md:text-[36px] 2xl:text-[48px] text-[#E4EAF8] relative w-full flex justify-center items-center py-16"
          data-aos="fade-right"
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
              <symbol id="text6">
                <text
                  textAnchor="middle"
                  x="50%"
                  y="50%"
                  dy=".37em"
                  className="text-[52px] md:text-[80px] lg:text-[120px] xl:text-[130px] 2xl:text-[200px]"
                >
                  Roadmap
                </text>
              </symbol>
              <use xlinkHref="#text6" className="text"></use>
              <use xlinkHref="#text6" className="text"></use>
              <use xlinkHref="#text6" className="text"></use>
              <use xlinkHref="#text6" className="text"></use>
            </svg>
          </div>
          Roadmap
        </h2>
      </div>
      <div className="pt-[50px] md:pt-[60px] 2xl:pt-[100px] pb-[50px] text-center mx-auto homepage-container px-[20px] md:px-[50px] lg:px-[50px] xl:px-[70px] 2xl:px-[80px] relative">
        <div className="absolute left-0 w-full min-h-[100px] max-h-[100px] dynamic-positioning">
          <Image src={line} alt="line" className="" />
        </div>
        {/* <div className="line-container">
          <div className="black-line"></div>
          <div className="green-line"></div>
        </div> */}
        <RoadmapSlider />
      </div>
    </div>
  );
};

export default Roadmap;
