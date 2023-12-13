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
          <div>
               <WebsiteTitle title={"Home Page"}></WebsiteTitle>
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
