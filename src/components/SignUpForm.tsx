import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";

interface ModalProps {
  handleClose: () => void;
}

const SignUpForm = (props: ModalProps) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("signup data", name, email, password);
    setEmail("");
    setName("");
    setPassword("");
    props.handleClose();
  };

  return (
    <div>
      <Grid container sx={{ borderRadius: 2, margin: 2, padding: 3 }}>
        <TextField
          fullWidth
          variant="filled"
          label="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          fullWidth
          variant="filled"
          label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          variant="filled"
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Grid>
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

export default SignUpForm;
