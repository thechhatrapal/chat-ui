import { Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

function Auth() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Stack
      spacing={3}
      sx={{
        maxWidth: {
          xs: "70%",
          md: "30%",
        },
        height: "100vh",
        justifyContent: "center",
        margin: "0 auto",
      }}
    >
      <TextField
        label="Email"
        type="email"
        name="email"
        variant="outlined"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <TextField
        type="password"
        label="Password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        variant="outlined"
        value={password}
      />
      <Button onClick={() => {}} variant="contained">
        Login
      </Button>
    </Stack>
  );
}

export default Auth;
