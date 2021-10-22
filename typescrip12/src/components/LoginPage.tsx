import * as React from "react";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";

export default function LoginPage() {

  return (
    <>
      <div
        className="register-form"
        style={{
          textAlign: "center",
          alignItems: "center",
          justifyItems: "center",
          display: "grid",
          // position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          overflow: "hidden",
          background:
            "radial-gradient(at center center, #1976d2  1%, rgba(62, 99, 249, 0) 100%)",
          transition: "all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s",
        }}
      >
        <h2 style={{ fontFamily: "cursive", fontSize: 36 }}>Login Form</h2>
        <Box sx={{ maxWidth: 300, minWidth: 280 }}>
          <TextField
            id="outlined-basic"
            label="Your Account"
            variant="outlined"
            style={{
              maxWidth: 300,
              minWidth: 280,
              borderRadius: 10,
            }}
            required
          />
          <br />
          <br />
          <br />
          <br />
          <TextField
            type="password"
            id="standard-basic"
            label="Your Pass"
            variant="outlined"
            style={{ maxWidth: 300, minWidth: 280 }}
            required
          />
          <br />
          <br />
          <br />
          <br />
          <Button
            style={{
              border: "solid 1px gray",
              borderRadius: 5,
              backgroundColor: "gray",
              color: "white",
            }}
          >
            Login
          </Button>
        </Box>
      </div>
    </>
  );
}
