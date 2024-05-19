import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import MultipleSelect from "./SelectOptions/SelectOptions";

function Options() {
  return (
    <Box>
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
      </Box>
      <Box
        sx={{
          mt: 4,
          display: "flex",
          gap: 5,
          mx: "auto",
          bgcolor: "Background.paper",
        }}
      >
        <MultipleSelect />
      </Box>
    </Box>
  );
}

export default Options;
