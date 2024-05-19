import React, { useState } from "react";
import { Container } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Genericform from "./new-stage-widget-types/Genericform";
import Options from "./new-stage-widget-types/Options";
import Strings from "./new-stage-widget-types/Strings";

function CreateStage() {
  const [newStageName, setNewStageName] = useState("Name");
  const [widjetType, setWidjetType] = useState("");
  const [widjetIndex, setWidjetIndex] = useState(0);

  const newStageHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const workFlowValues: string = event.target.value;
    const defaultWorkFlow: string = "Name";
    if (workFlowValues === "") {
      setNewStageName(defaultWorkFlow);
    } else {
      setNewStageName(workFlowValues);
    }
  };

  const widjetTypeNameHandle = (event: SelectChangeEvent<string>) => {
    const selectedValue = event.target.value as string;
    const selectedIndex = menuItemOptions.findIndex(
      (option) => option.value === selectedValue
    );
    console.log("value = " + selectedValue + ". type = ", typeof selectedValue);
    console.log("index = " + selectedIndex + ". type = ", typeof selectedIndex);
    setWidjetType(selectedValue);
    setWidjetIndex(selectedIndex);
  };

  const menuItemOptions = [
    { index: 0, value: "", label: "None" },
    { index: 1, value: "Generic form", label: "Generic form" },
    { index: 2, value: "Options", label: "Options" },
    { index: 3, value: "String", label: "String" },
  ];

  return (
    <Container sx={{ mt: 2 }}>
      <Accordion defaultExpanded sx={{ py: 1 }}>
        <AccordionSummary>{newStageName}</AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              display: "flex",
              gap: 5,
              mx: "auto",
              bgcolor: "Background.paper",
            }}
          >
            <TextField
              sx={{ width: 350 }}
              onChange={newStageHandle}
              id="standard-basic"
              label="Name"
              variant="standard"
            />

            <FormControl variant="standard" sx={{ width: 350 }}>
              <InputLabel id="demo-select-small-label">Widjet Type</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={widjetType}
                label="Workflow Type"
                onChange={widjetTypeNameHandle}
              >
                {menuItemOptions.map((option) => (
                  <MenuItem key={option.index} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl component="fieldset">
              <FormGroup aria-label="position" row>
                <FormControlLabel
                  value="start"
                  control={<Switch color="primary" />}
                  label="Editable"
                  labelPlacement="start"
                />
              </FormGroup>
            </FormControl>
            <FormControl component="fieldset">
              <FormGroup aria-label="position" row>
                <FormControlLabel
                  value="start"
                  control={<Switch color="primary" />}
                  label="Skippable"
                  labelPlacement="start"
                />
              </FormGroup>
            </FormControl>
          </Box>
          <Box>
            {(() => {
              switch (widjetIndex) {
                case 0:
                  return null;
                case 1:
                  return <Genericform />;
                case 2:
                  return <Options />;
                case 3:
                  return <Strings />;
                default:
                  return null;
              }
            })()}
          </Box>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}

export default CreateStage;
