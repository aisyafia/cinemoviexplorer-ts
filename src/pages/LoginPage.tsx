import { Box, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import ModalMUI from "../ModalPopUp/Modal";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const submitForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("login data", email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h3>Sign in to your account</h3>
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, maxWidth: "20%" },
        }}
      >
        <form onSubmit={submitForm}>
          <TextField
            fullWidth
            variant="filled"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            variant="filled"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <Button type="submit" variant="contained" color="secondary">
            Login
          </Button>
        </form>
      </Box>
      <br />
      <p>Don't have an account yet?</p>
      <ModalMUI />
    </div>
  );
};

export default LoginPage;
