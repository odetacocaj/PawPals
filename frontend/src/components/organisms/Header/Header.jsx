import { NavLink } from "react-router-dom";
import Button from "../../atoms/Button/Button";
import "./Header.scss";
import logo from "../../../assets/images/logo.png";
import TemporaryDrawer from "../../molecules/Drawer/Drawer";

const menuItems = [
  { text: "Home", route: "/" },
  { text: "About", route: "/about" },
  { text: "Contact", route: "/contact" },
];

const Header = () => {
  return (
    <header className="header p-4 flex items-center">
      <div className="logo flex-shrink-0">
        <NavLink to="/">
          <img src={logo} alt="Dog Adoption Center Logo" className="h-10" />
        </NavLink>
      </div>
      <nav className="flex-grow">
        <ul className="menu">
          {menuItems.map((item, index) => (
            <li key={index} className="large-screen-menu-item">
              <NavLink to={item.route} className="hover:text-gray-400">
                {item.text}
              </NavLink>
            </li>
          ))}

          <Button className="large-screen-menu-item donateButton">Donate</Button>
        </ul>
        <div className="mobile-menu">
          <TemporaryDrawer menuItems={menuItems}>
            <Button className="donateButton ml-4 mt-4">Donate</Button>
          </TemporaryDrawer>
        </div>
      </nav>
    </header>
  );
};

export default Header;
