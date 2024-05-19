import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import CreacteLable from "./CreateLable/CreateLable";

function Genericform() {
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
      <CreacteLable />
    </Box>
  );
}

export default Genericform;
