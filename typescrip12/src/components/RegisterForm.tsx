import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button, TextField } from "@mui/material";

export default function RegisterForm() {
  const [sex, setSex] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSex(event.target.value as string);
  };

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
        <h2 style={{ fontFamily: "cursive", fontSize: 36 }}>Register Form</h2>
        <Box sx={{ maxWidth: 300, minWidth: 280 }}>
          <TextField
            id="outlined-basic"
            label="Your Account"
            variant="outlined"
            style={{
              maxWidth: 300,
              minWidth: 280,
              // margin: "1rem auto",
              // padding: "0.5rem",
              borderRadius: 10,
            }}
            required
          />
          <br />
          <br />
          <TextField
            type="email"
            id="filled-basic"
            label="Your Email"
            variant="outlined"
            style={{ maxWidth: 300, minWidth: 280 }}
            required
          />
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
          <TextField
            type="tel"
            id="standard-basic"
            label="Your Number"
            variant="outlined"
            style={{ maxWidth: 300, minWidth: 280 }}
            required
          />
          <br />
          <br />
          <p>Your Birthday</p>
          <TextField
            type="date"
            id="standard-basic"
            label=""
            variant="outlined"
            style={{ maxWidth: 300, minWidth: 280 }}
            required
          />
          <br />
          <br />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sex</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sex}
              label="Sex"
              onChange={handleChange}
            >
              <MenuItem value={10}>Male</MenuItem>
              <MenuItem value={20}>FeMale</MenuItem>
              <MenuItem value={30}>Other</MenuItem>
            </Select>
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
              Register
            </Button>
          </FormControl>
        </Box>
      </div>
    </>
  );
}
