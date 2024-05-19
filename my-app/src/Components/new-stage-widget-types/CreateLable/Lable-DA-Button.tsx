import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
  onAdd?: () => void;
  onDelete?: () => void;
  isDelete?: boolean;
}

function LableAdd(props: Props) {
  return (
    <Fab
      size="small"
      color="secondary"
      aria-label={props.isDelete ? "delete" : "add"}
      onClick={props.isDelete ? props.onDelete : props.onAdd}
    >
      {props.isDelete ? <DeleteIcon /> : <AddIcon />}
    </Fab>
  );
}

function LableDelete(props: Props) {
  return (
    <Fab
      size="small"
      color="secondary"
      aria-label="delete"
      onClick={props.onDelete}
    >
      <DeleteIcon />
    </Fab>
  );
}

export default LableAdd;
export { LableDelete };
