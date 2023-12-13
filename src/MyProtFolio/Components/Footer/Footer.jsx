import React from "react";
import { Link } from "react-router-dom";
import github from "../../../assets/github-go8nPZP0.png"
import facebook from "../../../assets/facebook-xbeWuVz3.png"
const Footer = () => {
     return (
          <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                    <div className="flex justify-center gap-5">
                    <Link>contact</Link>
                    <Link>About</Link>
                    <Link>contact</Link>
                    </div>
                    <div className="flex justify-center gap-5">
                         <a className="hover:underline" href="https://github.com/alsafa012" rel="noreferrer" target="_blank">
                              <img className="w-10" src={github} alt="" />
                         </a>
                         <a href="https://www.facebook.com/rjridoy012" rel="noreferrer" target="_blank">
                              <img className="w-10" src={facebook} alt="" />
                         </a>
                    </div>
                    <p>
                         Copyright © 2023 - All right reserved by Al-Safa Ridoy
                    </p>
          </footer>
     );
};

export default Footer;
