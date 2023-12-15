import Container from "../../Components/Container/Container";
import img1 from "../../../assets/project-1.png";
import img2 from "../../../assets/project-2.png";
import img3 from "../../../assets/project-3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
const MyProjects = () => {
     return (
          <div>
               <Container>
                    <h1 className="my-8 text-3xl font-bold text-center w-[80%] md:w-[30%] mx-auto border-b-4 p-2">
                         Top Projects
                    </h1>
                    {/* <div className="grid md:grid-cols-2 gap-5">
                         <div>
                              <a target="_blank" rel="noreferrer" href="https://contest-hub-5feeb.web.app/">
                                   <img src={img3} alt="" />
                              </a>
                         </div>
                         <div className="">
                              <a target="_blank" rel="noreferrer" href="https://restaurant-project-d2dc8.web.app/">
                                   <img className="" src={img2} alt="" />
                              </a>
                         </div>
                         <div>
                              <a target="_blank" rel="noreferrer" href="https://techbd-shop.web.app/">
                                   <img src={img1} alt="" />
                              </a>
                         </div>
                         <div>
                              <a href="">
                                   <img src="../../../assets" alt="" />
                              </a>
                         </div>
                    </div> */}
                    <Swiper
                         // slidesPerView={3}
                         // spaceBetween={30}
                         // pagination={{
                         //      clickable: true,
                         // }}
                         // modules={[Pagination]}
                         className="mySwiper my-10"
                         breakpoints={{
                              // when window width is >= 640px
                              640: {
                                   slidesPerView: 1,
                                   spaceBetween: 10,
                              },
                              // when window width is >= 768px
                              768: {
                                   slidesPerView: 2,
                                   spaceBetween: 20,
                              },
                              // when window width is >= 1024px
                              1024: {
                                   slidesPerView: 2,
                                   spaceBetween: 30,
                              },
                         }}
                    >
                         {/* {createContext.map((info) => ( */}
                         <SwiperSlide className="p-2">
                              <div>
                                   <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://contest-hub-5feeb.web.app/"
                                   >
                                        <img
                                             className="hover:scale-105 transition"
                                             src={img3}
                                             alt=""
                                        />
                                   </a>
                              </div>
                         </SwiperSlide>
                         <SwiperSlide className="p-2">
                              <div>
                                   <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://restaurant-project-d2dc8.web.app/"
                                   >
                                        <img
                                             className="hover:scale-105 transition"
                                             src={img2}
                                             alt=""
                                        />
                                   </a>
                              </div>
                         </SwiperSlide>
                         <SwiperSlide className="p-2">
                              <div>
                                   <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://techbd-shop.web.app/"
                                   >
                                        <img
                                             className="hover:scale-105 transition"
                                             src={img1}
                                             alt=""
                                        />
                                   </a>
                              </div>
                         </SwiperSlide>

                         {/* ))} */}
                    </Swiper>
                    <div className="text-center">
                         <button className="btn">See More</button>
                    </div>
               </Container>
          </div>
     );
};

export default MyProjects;
