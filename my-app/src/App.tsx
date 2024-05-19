import React, { useState, ReactElement } from "react";
import Workflow from "./Components/WorkFlowF";
import CreateStage from "./Components/CreateStage";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";
import { Container } from "@mui/material";

function App(): JSX.Element {
  const handleAddStage = (): void => {
    const newKey = stages.length;
    console.log("New Stage Key:", newKey);
    setStages((prevStages) => [
      ...prevStages,
      <CreateStage key={prevStages.length} />,
    ]);
  };

  const [stages, setStages] = useState<ReactElement[]>([
    <CreateStage key={0} />,
  ]);

  return (
    <Container>
      <div>
        <Workflow />
        {stages}
        <Box sx={{ pt: 2, ml: 3, pb: 50 }}>
          <Fab
            variant="extended"
            size="medium"
            color="primary"
            onClick={handleAddStage}
          >
            <AddIcon sx={{ mr: 1 }} />
            New Stage
          </Fab>
        </Box>
      </div>
    </Container>
  );
}

export default App;
