import WebsiteTitle from "../../Components/WebsiteTitle/WebsiteTitle";
import ContactPage from "../ContactPage/ContactPage";
import Navbar from "../../Components/Navbar/Navbar";
import AboutMyself from "../AboutMyself/AboutMyself";
import BannerSection from "../../AllSections/BannerSection/BannerSection";
import Footer from "../../Components/Footer/Footer";
import MySkills from "../../AllSections/MySkills/MySkills";
import MyExperience from "../../AllSections/MyExperience/MyExperience";
import MyProjects from "../../AllSections/MyProjects/MyProjects";
const HomePage = () => {
     return (
          // text color - #858792
          // font family {"Cormorant Garamond",serif}
          // p  tag text-[#858792] {descriptions}
          // <div className="dark:bg-[#A2A2A2]">
          // <div className="dark:bg-[#878592]">
          <div className="dark:bg-[#252734]">
               <WebsiteTitle title={"Portfolio"}></WebsiteTitle>
               <Navbar></Navbar>
               <BannerSection></BannerSection>
               <MySkills></MySkills>
               <MyExperience></MyExperience>
               <MyProjects></MyProjects>
               <AboutMyself></AboutMyself>
               <ContactPage></ContactPage>
               <Footer></Footer>
          </div>
     );
};

export default HomePage;
