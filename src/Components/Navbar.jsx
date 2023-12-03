import { Outlet, Link } from "react-router-dom";
import "../CSS/header.css";
import web from "./img/mylogo.png"
import { About } from "./About";
import { Courses } from "./Courses";
import { Certificate } from "./Certificate";
import { Contact } from "./Contact";
import { Hero } from "./Hero";




const Navbar = () => {
  return (
    
    <div className="container-fluid mx-auto flex items-center justify-between">
      <div>
        <nav>
          <div className="header-nav2">
            <img
              src={web}
              alt="logo"
              className="logo-nav"
              style={{ marginRight: "10px" }}
            />
            <Link
              to="/"
              className="text-black text-base mr-2"
              style={{ fontSize: "1.5rem" }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-black ml-4 text-base mr-2"
              style={{ fontSize: "1.5rem" }}
            >
              About
            </Link>
            <Link
              to="/courses"
              className="text-black ml-4 text-base mr-2"
              style={{ fontSize: "1.5rem" }}
            >
              Courses
            </Link>

            <Link
              to="/certificate"
              className="text-black ml-4 text-base flex items-center  mr-2"
              style={{ fontSize: "1.5rem" }}
            >
              Certificate
            </Link>

            <Link
              to="/contact"
              className="text-black ml-4 text-base mr-2"
              style={{ fontSize: "1.5rem" }}
            >
              Contact
            </Link>
            <Link
              to="/loning"
              className="btn btn-outline text-white" 
              style={{ fontSize: "1.5rem" , borderRadius: "20px", background:"#00c3ff"}}
            >
              Log in
            </Link>
          </div>
        </nav>
      </div>
      <div
        className="container-fluid grid"
        style={{ boxShadow: "0 5px 8px rgba(0, 0, 0, 0.1)", padding: "1rem" }}
      >    
      </div>
     
  
    </div>
    
  );

};

export { Navbar };
