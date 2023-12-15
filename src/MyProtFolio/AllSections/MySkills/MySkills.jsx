import html from "../../../assets/html5-logo-gc7oRt-7.png";
import css from "../../../assets/css3-logo-8yYF7Cpv.png";
import react from "../../../assets/react-logo-1.png";
import js from "../../../assets/js.png";
import tailwind from "../../../assets/teilwind.png";
import mongodb from "../../../assets/mongodb-logo-gznyaiAt.png";
import node from "../../../assets/nodejs-logo-S0pmkYaS.png";
import express from "../../../assets/express-js-logo-X5bzKZPk.png";
import Container from "../../Components/Container/Container";

// import react from "../../../assets/"

// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-cube";
// import "swiper/css/pagination";

// // import './styles.css';

// // import required modules
// import { EffectCube, Pagination } from "swiper/modules";

const MySkills = () => {
     return (
          <Container>
               <div className="">
                    <h1 className="text-[#858792] my-8 text-3xl font-bold text-center w-[80%] md:w-[30%] mx-auto border-b-4 p-2">
                         Skills That I Know
                    </h1>
                    <div className="w-[70%] mx-auto">
                         <div className="flex gap-5 flex-wrap justify-center">
                              <div className="w-[250px] p-5 rounded-lg shadow-lg">
                                   <img
                                        className="w-16 mx-auto"
                                        src={html}
                                        alt=""
                                   />
                              </div>
                              <div className="w-[250px] p-5 rounded-lg shadow-lg">
                                   <img
                                        className="w-16 mx-auto"
                                        src={css}
                                        alt=""
                                   />
                              </div>
                              <div className="w-[250px] p-5 rounded-lg shadow-lg">
                                   <img
                                        className="w-16 mx-auto h-full"
                                        src={tailwind}
                                        alt=""
                                   />
                              </div>
                              <div className="w-[250px] p-5 rounded-lg shadow-lg">
                                   <img
                                        className="w-16 mx-auto"
                                        src={js}
                                        alt=""
                                   />
                              </div>
                              <div className="w-[250px] p-5 rounded-lg shadow-lg">
                                   <img
                                        className="w-16 mx-auto"
                                        src={react}
                                        alt=""
                                   />
                              </div>
                              <div className="w-[250px] p-5 rounded-lg shadow-lg">
                                   <img
                                        className="w-16 mx-auto"
                                        src={mongodb}
                                        alt=""
                                   />
                              </div>
                              <div className="w-[250px] p-5 rounded-lg shadow-lg">
                                   <img
                                        className="w-16 mx-auto"
                                        src={express}
                                        alt=""
                                   />
                              </div>
                              <div className="w-[250px] p-5 rounded-lg shadow-lg">
                                   <img
                                        className="w-16 mx-auto"
                                        src={node}
                                        alt=""
                                   />
                              </div>
                         </div>
                    </div>
               </div>
               {/* <Swiper
                    effect={"cube"}
                    grabCursor={true}
                    cubeEffect={{
                         shadow: true,
                         slideShadows: true,
                         shadowOffset: 20,
                         shadowScale: 0.94,
                    }}
                    pagination={true}
                    modules={[EffectCube, Pagination]}
                    className="mySwiper"
               >
                    <SwiperSlide>
                         <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                         <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                         <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                         <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                         <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </SwiperSlide>
               </Swiper> */}
          </Container>
     );
};

export default MySkills;
