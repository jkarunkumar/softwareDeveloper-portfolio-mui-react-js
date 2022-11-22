import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {Link} from 'react-scroll'
const pages = [{name:"Experience",to:"timeline"

},{name:"Projects",to:"projects"

},{name:"Contact",to:"contact"

}];
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer
        className="drawerContainer"
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List >
          {pages.map((page, index) => (
            <ListItemButton key={index}   onClick={() => console.log(page,'checkpahe')}>
              <ListItemIcon>
                <ListItemText  >
                 <Link   className="drawerLetter" to={page.to} spy={true} smooth={true} duration={500}> 
                  {page.name}</Link></ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
