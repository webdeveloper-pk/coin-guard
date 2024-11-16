import React from "react";

const About = () => {
  return (
    <div className="relative w-full homepage-container mx-auto text-[#E4EAF8] px-[20px] md:px-[50px] lg:px-[50px] xl:px-[70px] 2xl:px-[80px] overflow-hidden">
      <div className="flex flex-col items-center">
        <div className="w-full py-[30px] md:py-[40px] 2xl:py-[50px]">
          <h2
            className="uppercase keania_one text-[32px] md:text-[36px] 2xl:text-[48px] text-[#E4EAF8] relative w-full flex justify-center items-center py-16"
            data-aos="fade-up"
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
                <symbol id="text3">
                  <text
                    textAnchor="middle"
                    x="50%"
                    y="50%"
                    dy=".37em"
                    className="text-[52px] md:text-[80px] lg:text-[120px] xl:text-[130px] 2xl:text-[200px]"
                  >
                    what is new?
                  </text>
                </symbol>
                <use xlinkHref="#text3" className="text"></use>
                <use xlinkHref="#text3" className="text"></use>
                <use xlinkHref="#text3" className="text"></use>
                <use xlinkHref="#text3" className="text"></use>
              </svg>
            </div>
            what is coingaurd?
          </h2>
        </div>
        <div className="py-[30px] md:py-[40px] 2xl:py-[50px] w-[100%] md:w-[90%] lg:w-[80%] 2xl:w-[70%] mx-auto text-center">
          <p
            className="font-[300] text-[16px] md:text-[18px] 2xl:text-[20px]"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            condimentum imperdiet lacus pretium tincidunt. Nullam mauris odio,
            laoreet non volutpat in, condimentum vel est. Nulla faucibus risus
            sed nibh egestas imperdiet. Curabitur dictum vulputate molestie.
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Nulla id eros sed nulla posuere mattis. In a
            neque nec nunc porta lobortis quis nec neque.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            condimentum imperdiet lacus pretium tincidunt. Nullam mauris odio,
            laoreet non volutpat in, condimentum vel est. Nulla faucibus risus
            sed nibh egestas imperdiet. Curabitur dictum vulputate molestie.
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Nulla id eros sed nulla posuere mattis. In a
            neque nec nunc porta lobortis quis nec neque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
