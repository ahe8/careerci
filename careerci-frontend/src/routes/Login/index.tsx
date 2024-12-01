import {  useState } from "react";

import {
  TextField,
  Button,
  Stack,
  Alert,
  Box,
  Typography,
} from "@mui/material";

import authService from "../../services/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      authService.loginUser(email, password);
      navigate("/");
    } catch (error) {
      //setErrorMessage(err);
      // setErrorMessage(err.toString());
      setErrorMessage(error.code.toString());
      console.log(error.message);
    }
  };

  return (
    <>
      <Box sx={{ border: 1, width: "fit-content", m: "0 auto", p: 5 }}>
        <Stack alignItems="center" spacing={3}>
          {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
          <Typography variant="h4" component="h1">
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2} alignItems="center">
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                type="email"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                required
              />
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                type="password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                required
              />
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                style={{ width: "fit-content" }}
              >
                Login
              </Button>
            </Stack>
          </form>
        </Stack>
      </Box>
    </>
  );
};

export default Login;
