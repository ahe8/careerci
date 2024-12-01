import { Link } from "react-router-dom";

import { Box, List, ListItemText, ListItemButton } from "@mui/material";

import NavbarText from "./NavbarText";

const Navbar = () => {
  const routes = ["Jobs", "Resumes", "Skills", "Certifications", "Brag Sheet"];

  const routesMap = routes.map((route) => (
    <ListItemButton
      key={route}
      component={Link}
      to={`/${route.replace(/\s+/g, "").toLowerCase()}`}
    >
      <ListItemText>
        <NavbarText>{route}</NavbarText>
      </ListItemText>
    </ListItemButton>
  ));

  return (
    <>
      <Box sx={{ overflow: "auto" }} component="nav">
        <List>
          <ListItemButton component={Link} to={`/`}>
            <NavbarText>Dashboard</NavbarText>
          </ListItemButton>
          {routesMap}
        </List>
      </Box>
    </>
  );
};

export default Navbar;
