import { Outlet } from 'react-router-dom';
// import HomePage from '../MyProtFolio/HomePage/HomePage';

const MainLayout = () => {
     return (
          <div>
               {/* <HomePage></HomePage> */}
               <Outlet></Outlet>
          </div>
     );
};

export default MainLayout;