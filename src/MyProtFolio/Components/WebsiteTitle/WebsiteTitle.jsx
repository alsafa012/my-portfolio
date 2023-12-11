import { Helmet } from "react-helmet-async";

const WebsiteTitle = ({ title }) => {
     return (
          <Helmet>
               <title>{title}</title>
               <link rel="canonical" href="https://www.tacobell.com/" />
          </Helmet>
     );
};

export default WebsiteTitle;
