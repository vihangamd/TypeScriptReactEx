import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import LableAdd, { LableDelete } from "./Lable-DA-Button";
import Typography from "@mui/material/Typography";

function CreacteLable() {
  const [labels, setLabels] = useState([
    {
      indexNumber: "1.",
      lable: "",
      dataTypeName: "",
      fieldId: "",
      fieldRow: "",
      required: false,
    },
  ]);

  const handleAddLabel = () => {
    const newIndexNumber = `${labels.length + 1}.`;
    const newLabel = {
      indexNumber: newIndexNumber,
      lable: "",
      dataTypeName: "",
      fieldId: "",
      fieldRow: "",
      required: false,
    };
    setLabels([...labels, newLabel]);
  };

  const handleDeleteLabel = (index: number) => {
    if (labels.length === 1) {
      return; // Ensure at least one label remains
    }
    const updatedLabels = labels.filter((_, i) => i !== index);
    setLabels(
      updatedLabels.map((label, i) => ({ ...label, indexNumber: `${i + 1}.` }))
    );
  };

  const handleChange = <K extends keyof (typeof labels)[0]>(
    index: number,
    field: K,
    value: (typeof labels)[0][K]
  ) => {
    const updatedLabels = [...labels];
    updatedLabels[index][field] = value;
    setLabels(updatedLabels);
  };

  const handleCheckboxChange = (index: number, checked: boolean) => {
    handleChange(index, "required", checked);
  };

  return (
    <>
      {labels.map((label, index) => (
        <Box
          key={index}
          sx={{
            mt: 4,
            display: "flex",
            gap: 2,
            mx: "auto",
            bgcolor: "Background.paper",
          }}
        >
          <Typography mt={3} variant="body1" gutterBottom>
            {label.indexNumber}
          </Typography>
          <TextField
            sx={{ width: 250 }}
            id="standard-basic"
            label="Lable"
            variant="standard"
            value={label.lable}
            onChange={(e) => handleChange(index, "lable", e.target.value)}
          />

          <FormControl variant="standard" sx={{ width: 175 }}>
            <InputLabel id={`data-type-label-${index}`}>Data Type</InputLabel>
            <Select
              labelId={`data-type-label-${index}`}
              id={`data-type-select-${index}`}
              value={label.dataTypeName}
              label="Data Type"
              onChange={(e) =>
                handleChange(index, "dataTypeName", e.target.value as string)
              }
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Date">Date</MenuItem>
              <MenuItem value="Time">Time</MenuItem>
              <MenuItem value="Datetime">Datetime</MenuItem>
              <MenuItem value="Email">Email</MenuItem>
              <MenuItem value="Tel">Tel</MenuItem>
              <MenuItem value="Float">Float</MenuItem>
              <MenuItem value="String">String</MenuItem>
            </Select>
          </FormControl>

          <TextField
            sx={{ width: 175 }}
            id={`field-id-${index}`}
            label="Field ID"
            variant="standard"
            value={label.fieldId}
            onChange={(e) => handleChange(index, "fieldId", e.target.value)}
          />
          <TextField
            sx={{ width: 175 }}
            id={`field-row-${index}`}
            label="Field Row"
            variant="standard"
            value={label.fieldRow}
            onChange={(e) => handleChange(index, "fieldRow", e.target.value)}
          />

          <FormControlLabel
            sx={{ width: 175, alignItems: "center" }}
            required
            control={<Checkbox />}
            checked={label.required}
            onChange={(event: React.SyntheticEvent<Element, Event>) =>
              handleCheckboxChange(
                index,
                (event.target as HTMLInputElement).checked
              )
            }
            label="Required"
          />
          {
            <>
              {index === labels.length - 1 ? (
                <LableAdd onAdd={handleAddLabel} />
              ) : (
                <LableDelete onDelete={() => handleDeleteLabel(index)} />
              )}
            </>
          }
        </Box>
      ))}
    </>
  );
}

export default CreacteLable;
