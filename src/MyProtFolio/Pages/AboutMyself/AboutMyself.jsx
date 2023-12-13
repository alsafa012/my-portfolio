import Container from "../../Components/Container/Container";

const AboutMyself = () => {
     return (
          <div>
               <Container>
                    <h1 className="my-8 text-3xl font-bold text-center w-[80%] md:w-[30%] mx-auto border-b-4 p-2">
                         Education
                    </h1>
                    <div className="md:flex gap-2">
                         {/* 1st */}
                         <div className="flex-1 border space-y-1 p-5">
                              <h1 className="text-2xl font-bold">
                                   BSc in Computer Science and Engineering
                              </h1>
                              <h2 className="text-lg font-medium">
                                   Institute of Science and Technology,
                                   Bangladesh
                              </h2>
                              <i className="">Current Status: Third Year</i>
                              <p className="font-light">
                                   Currently in my third year of Computer
                                   Science and Engineering studies at Institute
                                   of Science and Technology, I combine
                                   theoretical knowledge with hands-on
                                   experience, laying a robust foundation for my
                                   web development endeavors.
                              </p>
                         </div>
                         {/* 2nd */}
                         <div className="flex-1 border space-y-1 p-5">
                              <h1 className="text-2xl font-bold">
                                   Higher Secondary Certificate (HSC)
                              </h1>
                              <h2 className="text-lg font-medium">
                                   Govt. Bangla Collage
                              </h2>
                              <i className="">Year of Completion: 2019</i>
                              <p className="font-light">
                                   Embarking on my educational journey, I
                                   successfully completed my Higher Secondary
                                   Certificate (HSC) in 2018, laying the
                                   groundwork for my subsequent pursuit of
                                   excellence in computer science and
                                   engineering.
                              </p>
                         </div>{" "}
                    </div>
               </Container>
          </div>
     );
};

export default AboutMyself;
