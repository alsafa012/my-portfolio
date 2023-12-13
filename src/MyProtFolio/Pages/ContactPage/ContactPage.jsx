import { CiLocationOn } from "react-icons/ci";
import { PiPhoneDuotone } from "react-icons/pi";
import { AiOutlineFieldTime } from "react-icons/ai";
import { GoIssueReopened } from "react-icons/go";
import Container from "../../Components/Container/Container";
import SendEmail from "./SendEmail";

const ContactPage = () => {
     return (
          <div>
               <Container>
                    <div>
                         <h1 className="my-8 text-3xl font-bold text-center w-[80%] md:w-[30%] mx-auto border-b-4 p-2">
                              {/* <h1 className="w-[300px] mx-auto mb-5 text-center text-2xl border-b-4 border-[#fcb900] md:text-4xl lg:text-5xl font-bold  mt-8 md:mt-16"> */}
                              Contact With Me
                         </h1>
                         <div className="flex flex-wrap gap-10 justify-center mt-10 mb-5">
                              <div className="space-y-4 shadow-xl rounded-lg p-5">
                                   <div className="flex justify-center text-5xl">
                                        <p>
                                             <CiLocationOn></CiLocationOn>
                                        </p>
                                   </div>
                                   <h2 className="text-xl font-medium">
                                        Postal Address
                                   </h2>
                                   <div className="font-light text-lg">
                                        {/* <p>RJ Agency</p> */}
                                        <p>85/7 Mohammadpur </p>
                                        <p>Dhaka, ON BD</p>
                                   </div>
                              </div>
                              <div className="space-y-4 shadow-xl rounded-lg p-5">
                                   <div className="flex justify-center text-5xl">
                                        <p>
                                             <AiOutlineFieldTime></AiOutlineFieldTime>
                                        </p>
                                   </div>

                                   <h2 className="text-xl font-medium">
                                        Phone & E-mail
                                   </h2>
                                   <div className="font-light text-lg">
                                        <p className="">
                                             Phone:018456....9
                                        </p>
                                        <p>Fax: 1-800-69-45</p>
                                        <p>
                                             <a
                                                  className=" underline hover:no-underline"
                                                  href="#"
                                             >
                                                  alsafa024@gmail.com
                                             </a>
                                        </p>
                                   </div>
                              </div>
                              {/* <div className=" space-y-4 shadow-xl rounded-lg p-5">
                                   <div className="flex justify-center text-5xl">
                                        <p>
                                             <PiPhoneDuotone></PiPhoneDuotone>
                                        </p>
                                   </div>
                                   <h2 className="text-xl font-medium">
                                        Open Hours
                                   </h2>
                                   <div className="font-light text-lg">
                                        <p>Monday – Friday</p>
                                        <p>8.00 am – 5.00 pm</p>
                                        Weekend Closed
                                        <p></p>
                                   </div>
                              </div> */}
                              {/* <div className=" space-y-4 shadow-xl rounded-lg p-5">
                                   <div className="flex justify-center text-5xl">
                                        <p>
                                             <GoIssueReopened></GoIssueReopened>
                                        </p>
                                   </div>
                                   <h2 className="text-xl font-medium">
                                        Sessions
                                   </h2>
                                   <div className="font-light text-lg">
                                        <p>Mornings, 8 am – 12 noon</p>
                                        <p>Afternoons, 1 pm – 5 pm</p>
                                        <p>FULL Day, 8 am – 5 pm</p>
                                   </div>
                              </div> */}
                         </div>
                         {/* <Footer></Footer> */}
                    </div>
                    <SendEmail></SendEmail>
               </Container>
          </div>
     );
};

export default ContactPage;
