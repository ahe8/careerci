import { useState } from "react";
import { TextField, Button, Stack } from "@mui/material";

import authService from "../../services/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const isValidPassword = () => {
    return password === confirmPassword;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    try {
      event.preventDefault();
      if (isValidPassword()) {
        authService.registerUser(email, password);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Stack alignItems="center">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2} alignItems="center">
            <TextField
              id="email"
              label="Email"
              type="email"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              required
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              required
            />
            <TextField
              id="confirm-password"
              label="Confirm Password"
              type="password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setConfirmPassword(e.target.value)
              }
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              style={{ width: "fit-content" }}
            >
              Register
            </Button>
          </Stack>
        </form>
      </Stack>
    </>
  );
};

export default Register;
