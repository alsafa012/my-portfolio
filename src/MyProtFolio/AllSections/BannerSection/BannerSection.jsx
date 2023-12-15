import profilePic from "../../../assets/profile.jpg";
import Container from "../../Components/Container/Container";
import resume from "../../../assets/ridoyLabReport.pdf"
const BannerSection = () => {
     return (
          <Container>
               {/* <div className="border-2 md:overflow-hidden dark:bg-[#dedee874] dark:text-white"> */}
               <div className="md:overflow-hidden dark:bg-[#2a2c39] dark:text-white">
                    <div className="flex flex-col-reverse md:flex-row items-center">
                         <div className="flex-1">
                              <div className="w-[80%] mx-auto space-y-2">
                                   <h1 className="text-2xl font-bold text-[#858792]">
                                        Hi, I,m
                                   </h1>
                                   <h2 className="text-3xl font-bold">
                                        Al-Safa Ridoy
                                   </h2>
                                   <i className="text-blue-600">
                                        *A Frontend Web Developer*
                                   </i>
                                   <p className="text-lg font-medium">
                                        Shot what able cold new see
                                        hold.Friendly as an betrayed formerly
                                        he. Morning because as to society
                                        behaved moments.
                                   </p>
                                   <div className="flex gap-2">
                                        {/* <button className="btn bg-[#252734]"> */}
                                        <a href={resume} download>
                                        {/* <a href="../../../assets/ridoyLabReport.pdf" download> */}
                                             <button className="btn bg-blue-600 text-white border-none">
                                                  Download CV
                                             </button>
                                        </a>
                                        <button className="btn">Contact</button>
                                   </div>
                              </div>
                         </div>

                         <div className="flex-1">
                              <img
                                   className="w-[400px] h-[400px] object-contain mx-auto md:rounded-full"
                                   src={profilePic}
                                   alt=""
                              />
                         </div>
                    </div>
               </div>
          </Container>
     );
};

export default BannerSection;
