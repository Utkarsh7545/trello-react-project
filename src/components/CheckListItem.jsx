import React from "react";
import {
  Checkbox,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@emotion/react";

function CheckListItem({
  item,
  handleDeleteCheckListItem,
  handleUpdateCheckItem,
}) {
  const theme = useTheme();
  const handleCheck = async (e) => {
    await handleUpdateCheckItem(item.id, e.target.checked);
  };

  return (
    <Box
      style={{
        textDecoration: item.state === "complete" ? "line-through" : "none",
        display: "flex",
        alignItems: "center",
        backgroundColor: theme.palette.primary.main,
        borderRadius: 8,
        padding: "10px 20px",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Checkbox
          checked={item.state === "complete"}
          onChange={handleCheck}
          sx={{
            color: theme.palette.secondary.extraLight,
            "&.Mui-checked": {
              color: theme.palette.primary.accent,
            },
          }}
        />
        <Typography sx={{ color: theme.palette.text.primary }}>
          {item.name}
        </Typography>
      </Box>
      <IconButton
        edge="end"
        aria-label="delete"
        onClick={() => handleDeleteCheckListItem(item.id)}
        sx={{
          color: theme.palette.secondary.light,
          fontSize: "15px",
          "&:hover": { color: "red" },
        }}
      >
        <FontAwesomeIcon icon={faTrashAlt} />
      </IconButton>
    </Box>
  );
}

export default CheckListItem;
