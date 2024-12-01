import { AppBar, Toolbar, Typography, Button, Stack } from "@mui/material";

import LogoutButton from "../LogoutButton";

import { useAppSelector } from "../../app/hooks";

import { Link } from "react-router-dom";

const Header = () => {
  const auth = useAppSelector((state) => state.auth);

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Typography variant="h5" noWrap component="div" sx={{ flexGrow: 1 }}>
          CareerCI
        </Typography>
        {auth.isLoggedIn ? (
          <LogoutButton />
        ) : (
          <Stack direction="row" spacing={2}>
            <Button
              component={Link}
              to="login"
              variant="contained"
              color="secondary"
            >
              Login
            </Button>
            <Button
              component={Link}
              to="register"
              variant="contained"
              color="secondary"
            >
              Register
            </Button>
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
