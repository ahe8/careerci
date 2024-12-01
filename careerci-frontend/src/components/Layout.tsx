import { Outlet } from "react-router-dom";

import Header from "./Header";
import Navbar from "./Navbar";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import { useAppSelector } from "../app/hooks";

const drawerWidth = 240;

const Layout = () => {
  const auth = useAppSelector(state => state.auth);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header />
        {auth.isLoggedIn && (
          <>
            <Drawer
              variant="permanent"
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                  width: drawerWidth,
                  boxSizing: "border-box",
                },
              }}
            >
              <Toolbar />
              <Navbar />
            </Drawer>
          </>
        )}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default Layout;
