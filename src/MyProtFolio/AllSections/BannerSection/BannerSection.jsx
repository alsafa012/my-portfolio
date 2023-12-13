import profilePic from "../../../assets/profile.jpg";
import Container from "../../Components/Container/Container";
const BannerSection = () => {
     return (
          <Container>
               {/* <div className="border-2 md:overflow-hidden dark:bg-[#dedee874] dark:text-white"> */}
               <div className="border-2 md:overflow-hidden dark:bg-[#2a2c39] dark:text-white">
                    <div className="flex flex-col-reverse md:flex-row items-center">
                         <div className="flex-1">
                              <div className="w-[80%] border mx-auto">
                                   <h1 className="">Hi, I am</h1>
                                   <h2 className="">Al-Safa Ridoy </h2>
                                   <p className="">
                                        Shot what able cold new see
                                        hold.Friendly as an betrayed formerly
                                        he. Morning because as to society
                                        behaved moments.
                                   </p>
                                   <div className="flex gap-2">
                                        <button className="btn bg-[#252734]">
                                             Downlode CV
                                        </button>
                                        <button className="btn">Contact</button>
                                   </div>
                              </div>
                         </div>

                         <div className="flex-1 border">
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
