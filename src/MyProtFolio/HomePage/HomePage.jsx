import Navbar from '../Components/Navbar/Navbar';
import WebsiteTitle from '../Components/WebsiteTitle/WebsiteTitle';

const HomePage = () => {
     return (
          <div>
               <WebsiteTitle title={"Home Page"}></WebsiteTitle>
               <Navbar></Navbar>
          </div>
     );
};

export default HomePage;