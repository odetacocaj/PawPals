import { NavLink } from "react-router-dom";
import Button from "../../atoms/Button/Button";
import "./Header.scss";
import logo from "../../../assets/images/logo.png";
const Header = () => {
  return (
    <header className="header p-4 flex items-center">
      <div className="logo flex-shrink-0">
        <NavLink to="/">
          <img src={logo} alt="Dog Adoption Center Logo" className="h-10" />
        </NavLink>
      </div>
      <nav className="flex-grow">
        <ul className="menu flex justify-end space-x-4">
          <li>
            <NavLink to="/" className="hover:text-gray-400">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="hover:text-gray-400">
              About us
            </NavLink>
          </li>
          <li>
            <NavLink to="/dogs" className="hover:text-gray-400">
              Our Dogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-gray-400">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/donate" className="">
              <Button className="donateButton">Donate</Button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
