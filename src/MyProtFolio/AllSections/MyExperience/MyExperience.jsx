import React from "react";
import Container from "../../Components/Container/Container";

const MyExperience = () => {
     return (
          <div>
               <Container>
                    <h1 className="my-8 text-3xl font-bold text-center w-[80%] md:w-[30%] mx-auto border-b-4 p-2">
                         My Work Experience
                    </h1>
                    <div className="md:flex justify-center gap-10">
                         <div className="shadow-2xl p-5 rounded-lg mb-8 md:mb-0">
                              <h1 className="text-center text-2xl font-semibold mb-5">
                                   Technical Skills
                              </h1>

                              <div className="flex flex-col gap-2">
                                   <div className="flex justify-between">
                                        <label>REACT</label>

                                        <label>80%</label>
                                   </div>
                                   <progress
                                        className="progress progress-accent w-[300px]"
                                        value="80"
                                        max="100"
                                   ></progress>
                                   <div className="flex justify-between">
                                        <label>JAVA-SCRIPT</label>
                                        <label>70%</label>
                                   </div>
                                   <progress
                                        className="progress progress-accent w-[300px]"
                                        value="70"
                                        max="100"
                                   ></progress>
                                   <div className="flex justify-between">
                                        <label>HTML5</label>

                                        <label>85%</label>
                                   </div>
                                   <progress
                                        className="progress progress-accent w-[300px]"
                                        value="85"
                                        max="100"
                                   ></progress>
                                   <div className="flex justify-between">
                                        <label>CSS3</label>

                                        <label>80%</label>
                                   </div>
                                   <progress
                                        className="progress progress-accent w-[300px]"
                                        value="80"
                                        max="100"
                                   ></progress>
                                   <div className="flex justify-between">
                                        <label>MONGODB</label>

                                        <label>65%</label>
                                   </div>
                                   <progress
                                        className="progress progress-accent w-[300px]"
                                        value="65"
                                        max="100"
                                   ></progress>
                                   <div className="flex justify-between">
                                        <label>Node Js</label>
                                        <label>70%</label>
                                   </div>
                                   <progress
                                        className="progress progress-accent w-[300px]"
                                        value="70"
                                        max="100"
                                   ></progress>
                              </div>
                         </div>
                         <div className="shadow-2xl p-5 rounded-lg">
                              <h1 className="text-center text-2xl font-semibold mb-5">
                                   Professional Skills
                              </h1>
                              <div className="flex flex-col gap-2 ">
                                   <div className="flex justify-between">
                                        <label>Communication</label>

                                        <label>95%</label>
                                   </div>
                                   <progress
                                        className="progress progress-accent w-[300px]"
                                        value="95"
                                        max="100"
                                   ></progress>

                                   <div className="flex justify-between">
                                        <label>Team Work</label>

                                        <label>99%</label>
                                   </div>
                                   <progress
                                        className="progress progress-accent w-[300px]"
                                        value="99"
                                        max="100"
                                   ></progress>

                                   <div className="flex justify-between">
                                        <label>Project Management</label>

                                        <label>80%</label>
                                   </div>
                                   <progress
                                        className="progress progress-accent w-[300px]"
                                        value="80"
                                        max="100"
                                   ></progress>
                              </div>
                         </div>
                    </div>
               </Container>
          </div>
     );
};

export default MyExperience;
