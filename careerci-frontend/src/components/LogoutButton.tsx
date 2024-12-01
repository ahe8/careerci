import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import authService from "../services/auth";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      authService.logoutUser();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button onClick={handleLogout} variant="contained" color="secondary">
      Logout
    </Button>
  );
};

export default LogoutButton;
