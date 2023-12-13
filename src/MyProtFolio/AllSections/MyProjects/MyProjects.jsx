import Container from "../../Components/Container/Container";
import img1 from "../../../assets/project-1.png"
import img2 from "../../../assets/project-2.png"
import img3 from "../../../assets/project-3.png"
const MyProjects = () => {
     return (
          <div>
               <Container>
                    <h1 className="my-8 text-3xl font-bold text-center w-[80%] md:w-[30%] mx-auto border-b-4 p-2">
                         MyProjects
                    </h1>
                    <div className="grid md:grid-cols-2 gap-5">
                         <div>
                              <a target="_blank" rel="noreferrer" href="https://contest-hub-5feeb.web.app/">
                                   <img src={img1} alt="" />
                              </a>
                         </div>
                         <div>
                              <a target="_blank" rel="noreferrer" href="https://restaurant-project-d2dc8.web.app/">
                                   <img src={img2} alt="" />
                              </a>
                         </div>
                         <div>
                              <a target="_blank" rel="noreferrer" href="https://techbd-shop.web.app/">
                                   <img src={img3} alt="" />
                              </a>
                         </div>
                         <div>
                              <a href="">
                                   <img src="../../../assets" alt="" />
                              </a>
                         </div>
                    </div>
               </Container>
          </div>
     );
};

export default MyProjects;
