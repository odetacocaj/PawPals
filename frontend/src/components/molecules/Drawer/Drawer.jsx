import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "../../atoms/Button/Button";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "./Drawer.scss";
import { Divider } from "@mui/material";

export default function TemporaryDrawer({ menuItems, children }) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <div className="drawer-menu-items">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.route}
            className="drawer-menu-item"
            onClick={toggleDrawer(false)}
          >
            {item.text}
          </Link>
        ))}
      </div>
      <Divider />
      {children}
    </Box>
  );

  return (
    <>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon />
      </Button>
      <Drawer className="drawer-menu" anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      {open && <div className="drawer-overlay" onClick={toggleDrawer(false)}></div>}
    </>
  );
}
