import WebsiteTitle from "../../Components/WebsiteTitle/WebsiteTitle";
import ContactPage from "../ContactPage/ContactPage";
import Navbar from "../../Components/Navbar/Navbar";
import AboutMyself from "../AboutMyself/AboutMyself";
import BannerSection from "../../AllSections/BannerSection/BannerSection";
import Footer from "../../Components/Footer/Footer";
import MySkills from "../../AllSections/MySkills/MySkills";
import MyExperience from "../../AllSections/MyExperience/MyExperience";
const HomePage = () => {
     return (
          <div>
               <WebsiteTitle title={"Home Page"}></WebsiteTitle>
               <Navbar></Navbar>
               <BannerSection></BannerSection>
               <MyExperience></MyExperience>
               <MySkills></MySkills>
               <AboutMyself></AboutMyself>
               <ContactPage></ContactPage>

               <div>
                    <h1 className="text-2xl dark:text-5xl"> hello world</h1>
               </div>
               <Footer></Footer>
          </div>
     );
};

export default HomePage;
