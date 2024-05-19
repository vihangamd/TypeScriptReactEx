import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function Strings() {
  return (
    <Box
      sx={{
        mt: 4,
        display: "flex",
        gap: 5,
        mx: "auto",
        bgcolor: "Background.paper",
      }}
    >
      <TextField
        sx={{ width: 350 }}
        id="standard-basic"
        label="Widget Title"
        variant="standard"
      />
      <TextField
        sx={{ width: 350 }}
        id="standard-basic"
        label="Widget Version"
        variant="standard"
      />
      <FormControlLabel
        sx={{ width: 175 }}
        required
        control={<Checkbox />}
        label="Required"
      />
    </Box>
  );
}

export default Strings;
