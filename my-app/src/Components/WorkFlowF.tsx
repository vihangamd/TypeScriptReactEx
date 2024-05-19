import React, { useState } from "react";
import { Container } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

function Workflow() {
  const [workFlowName, setWorkFlowName] = useState("New Workflow");
  const [module, setModule] = React.useState("");
  const [workflowType, setWorkflowType] = React.useState("");

  const setWorkFlowHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const workFlowValues: string = event.target.value;
    const defaultWorkFlow: string = "New Workflow";
    if (workFlowValues === "") {
      setWorkFlowName(defaultWorkFlow);
    } else {
      setWorkFlowName(workFlowValues);
    }
  };

  const workflowTypeHandle = (event: SelectChangeEvent) => {
    setWorkflowType(event.target.value as string);
  };

  const moduleHandle = (event: SelectChangeEvent) => {
    setModule(event.target.value as string);
  };

  return (
    <Container sx={{ mt: 10 }}>
      <Accordion defaultExpanded sx={{ py: 1 }}>
        <AccordionSummary>{workFlowName}</AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              display: "flex",
              gap: 3,
              mx: "auto",
              bgcolor: "Background.paper",
            }}
          >
            <TextField
              fullWidth
              onChange={setWorkFlowHandle}
              id="standard-basic"
              label="Workflow Name"
              variant="standard"
            />
            <TextField
              fullWidth
              id="standard-basic"
              label="Workflow Id"
              variant="standard"
            />
            <FormControl variant="standard" fullWidth>
              <InputLabel id="demo-select-small-label">
                Workflow Type
              </InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={workflowType}
                label="Workflow Type"
                onChange={workflowTypeHandle}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Primary">Primary</MenuItem>
                <MenuItem value="Sub">Sub</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="standard" fullWidth>
              <InputLabel id="demo-select-small-label">Module</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={module}
                label="Module"
                onChange={moduleHandle}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Origination">Origination</MenuItem>
                <MenuItem value="Collections">Collections</MenuItem>
                <MenuItem value="Operation">Operation</MenuItem>
                <MenuItem value="Admin">Admin</MenuItem>
                <MenuItem value="Teller">Teller</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}

export default Workflow;
