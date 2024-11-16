import Image from "next/image";
import left1 from "@/public/working-left1.png";
import left2 from "@/public/working-left2.png";
import left3 from "@/public/working-left3.png";
import videoImage from "@/public/working-video-image.png";
import playBtn from "@/public/working-play.png";

const Working = () => {
  return (
    <div className="relative w-full homepage-container mx-auto text-[#E4EAF8] px-[20px] md:px-[50px] lg:px-[50px] xl:px-[70px] 2xl:px-[80px] overflow-hidden">
      {/* bubbles */}
      <div className="bubbles">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-full py-[30px] md:py-[40px] 2xl:py-[50px]">
          <h2
            className="uppercase keania_one text-[32px] md:text-[36px] 2xl:text-[48px] text-[#E4EAF8] relative w-full flex justify-center items-center py-16"
            data-aos="zoom-in"
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
                <symbol id="text4">
                  <text
                    textAnchor="middle"
                    x="50%"
                    y="50%"
                    dy=".37em"
                    className="text-[52px] md:text-[80px] lg:text-[120px] xl:text-[130px] 2xl:text-[200px]"
                  >
                    H0W IT WORKS?
                  </text>
                </symbol>
                <use xlinkHref="#text4" className="text"></use>
                <use xlinkHref="#text4" className="text"></use>
                <use xlinkHref="#text4" className="text"></use>
                <use xlinkHref="#text4" className="text"></use>
              </svg>
            </div>
            H0W IT WORKS?
          </h2>
        </div>
        <div className="py-[40px] md:py-[60px] 2xl:py-[100px] w-[100%] px-[20px] md:px-[50px] 2xl:px-[130px]">
          <div className="flex flex-col lg:flex-row gap-y-[50px] lg:gap-x-[50px] 2xl:gap-x-[100px] lg:items-center">
            <div className="w-full lg:w-1/2 flex flex-col gap-[40px] lg:gap-[30px] xl:gap-[40px] 2xl:gap-[70px]">
              <div
                className="flex flex-col md:flex-row  gap-y-[25px] gap-x-[35px] items-center"
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-easing="ease-in-sine"
              >
                <div className="min-w-[60px] min-h-[60px] max-w-[60px] h-[60px] xl:min-w-[78px] xl:min-h-[78px] xl:max-w-[78px] xl:h-[78px]">
                  <Image src={left1} alt="left-1" className="w-full h-auto" />
                </div>
                <div>
                  <p className="font-[700] text-[18px] md:text-[20px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] text-center md:text-left">
                    Get Started
                  </p>
                  <p className="font-[300] text-[16px] md:text-[18px] lg:text-[16px] xlm:text-[17px] 2xl:text-[20px] text-[#E4EAF8] text-center md:text-left">
                    Complete the quick sign-Up process, and we’ll take care of
                    analyzing your credit information from all major bureaus.
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col md:flex-row  gap-y-[25px] gap-x-[35px] items-center"
                data-aos="fade-right"
                data-aos-duration="1800"
                data-aos-easing="ease-in-sine"
              >
                <div className="min-w-[60px] min-h-[55px] max-w-[60px] h-[55px] xl:min-w-[78px] xl:min-h-[73px] xl:max-w-[78px] xl:h-[73px]">
                  <Image src={left2} alt="left-2" className="w-full h-auto" />
                </div>
                <div>
                  <p className="font-[700] text-[18px] md:text-[20px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] text-center md:text-left">
                    Analyse Your Investment
                  </p>
                  <p className="font-[300] text-[16px] md:text-[18px] lg:text-[16px] xlm:text-[17px] 2xl:text-[20px] text-[#E4EAF8] text-center md:text-left">
                    Use our smart software to identify negative items, Generate
                    dispute letters, And Learn How to improve your credit score.
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col md:flex-row  gap-y-[25px] gap-x-[35px] items-center"
                data-aos="fade-right"
                data-aos-duration="2400"
                data-aos-easing="ease-in-sine"
              >
                <div className="min-w-[70px] min-h-[56px] max-w-[70px] h-[56px] xl:min-w-[80px] xl:min-h-[66px] xl:max-w-[80px] xl:h-[66px]">
                  <Image src={left3} alt="left-3" className="w-full h-auto" />
                </div>
                <div>
                  <p className="font-[700] text-[18px] md:text-[20px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] text-center md:text-left">
                    Stay Protected With Coingaurd
                  </p>
                  <p className="font-[300] text-[16px] md:text-[18px] lg:text-[16px] xlm:text-[17px] 2xl:text-[20px] text-[#E4EAF8] text-center md:text-left">
                    From Home ownership to saving on interest, Your new credit
                    score opens many door.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="w-full lg:w-1/2 relative"
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-duration="2400"
              data-aos-easing="ease-in-sine"
            >
              <div className="center-child">
                <Image
                  src={playBtn}
                  alt="play"
                  className="w-[60%] md:w-[80%] xl:w-[90%] h-auto mx-auto"
                />
              </div>
              <Image
                src={videoImage}
                alt="video"
                className="w-full h-[230px] md:h-[410px] lg:h-[290px] xl:h-[390px] 2xl:h-[490px]"
              />
              <div className="center-child mt-1" style={{ zIndex: -1 }}>
                <div className="outer-circle rounded-full w-[240px] h-[240px] md:w-[420px] md:h-[420px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] 2xl:w-[500px] 2xl:h-[500px]">
                  <div className="inner-circle rounded-full w-[230px] h-[230px] md:w-[410px] md:h-[410px] lg:w-[290px] lg:h-[290px] xl:w-[390px] xl:h-[390px] 2xl:w-[490px] 2xl:h-[490px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;
