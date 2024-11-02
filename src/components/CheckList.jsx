import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import {
  Box,
  Button,
  LinearProgress,
  Typography,
  IconButton,
  InputBase,
} from "@mui/material";
import toast from "react-hot-toast";
import { useTheme } from "@emotion/react";

import CheckListItem from "./CheckListItem";
import { createCheckListItem } from "../all-apis/check-list-item/createCheckListItem";
import { deleteCheckListItem } from "../all-apis/check-list-item/deleteCheckListItem";
import { updateCheckItem } from "../all-apis/check-list-item/updateCheckListItem";
import Notification from "./common/Notification";
import { getCheckListItems } from "../all-apis/check-list-item/getCheckListItems";

function CheckList({ cardId, data, handleDeleteCheckList, setLoading }) {
  const [checkListItems, setCheckListItems] = useState([]);
  const [addItemToggle, setAddItemToggle] = useState(false);
  const [percentCompletion, setPercentCompletion] = useState(0);
  const theme = useTheme();

  const fetchCheckListItems = async () => {
    try {
      setLoading(true);
      const checkListItemsData = await getCheckListItems(data.id);
      setCheckListItems(checkListItemsData);
      updatePercentCompletion(checkListItemsData);
    } catch (error) {
      toast.error("Error in fetching checklist items");
    } finally {
      setLoading(false);
    }
  };

  const handleAddCheckListItem = async (e) => {
    setLoading(true);
    e.preventDefault();
    const checkListItemName = e.target.checkListItemName.value;
    if(checkListItemName.length==0) throw new Error("Invalid name for a checklist item");
    e.target.checkListItemName.value = "";

    try {
      const newCheckListItem = await createCheckListItem(
        checkListItemName,
        data.id
      );
      let updatedItems = [...checkListItems, newCheckListItem];
      setCheckListItems(updatedItems);
      updatePercentCompletion(updatedItems);

    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCheckListItem = async (id) => {
    let temp = [...checkListItems];
    try {
      setLoading(true);
      temp = temp.filter((checkListItem) => checkListItem.id !== id);
      setCheckListItems(temp);
      await deleteCheckListItem(data.id, id);
      updatePercentCompletion(temp);

    } catch (error) {
      toast.error("Error in deleting checklist item");
    } finally {
      setLoading(false);
    }
  };

  const updatePercentCompletion = (items) => {
    const total = items.length;
    const checkedItems = items.filter(
      (item) => item.state === "complete"
    ).length;
    setPercentCompletion(
      total > 0 ? Math.round((checkedItems / total) * 100) : 0
    );
  };

  const handleUpdateCheckItem = async (id, state) => {
    try {
      const status = state ? "complete" : "incomplete";

      setCheckListItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, state: status } : item))
      );

      updatePercentCompletion(
        checkListItems.map((item) =>
          item.id === id ? { ...item, state: status } : item
        )
      );
      await updateCheckItem(cardId, id, status);
    } catch (error) {
      toast.error("Error in updating checklist item");
    }
  };

  useEffect(() => {
    fetchCheckListItems();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        border: `1px solid ${theme.palette.secondary.main}`,
        borderRadius: "16px",
        p: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            borderBottom: `1px solid ${theme.palette.secondary.main}`,
            width: "95%",
            pb: 2,
          }}
        >
          <FontAwesomeIcon
            icon={faSquareCheck}
            style={{ color: `${theme.palette.text.primary}`, fontSize: "2rem" }}
          />
          <Typography
            variant="body1"
            style={{
              color: `${theme.palette.text.primary}`,
              fontSize: "1.2rem",
            }}
          >
            {data.name}
          </Typography>
        </Box>
        <IconButton
          onClick={() => handleDeleteCheckList(data.id)}
          sx={{
            color: theme.palette.secondary.extraLight,
            fontSize: "15px",
            "&:hover": { color: "red" },
          }}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </IconButton>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Typography
          variant="body1"
          sx={{ color: `${theme.palette.text.primary}`, width: "30px" }}
        >
          {percentCompletion}%
        </Typography>
        <LinearProgress
          variant="determinate"
          value={percentCompletion}
          sx={{
            flexGrow: 1,
            color: theme.palette.primary.accent,
            height: "12px", 
            borderRadius: "8px",
            backgroundColor: theme.palette.primary.main,
            "& .MuiLinearProgress-bar": {
              backgroundColor: theme.palette.primary.accent,
              transition: ".2s ease"
            },
          }}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2,mr:1}}>
        {checkListItems.map((item) => (
          <CheckListItem
            key={item.id}
            item={item}
            handleDeleteCheckListItem={handleDeleteCheckListItem}
            handleUpdateCheckItem={handleUpdateCheckItem}
          />
        ))}
        {!addItemToggle ? (
          <Button
            variant="contained"
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.text.primary,
              width: "fit-content",
              borderRadius: "4px",
              fontFamily: theme.typography.primary,
              "&:hover": {
                backgroundColor: theme.palette.secondary.light,
                boxShadow: "none",
              },
            }}
            onClick={() => setAddItemToggle(true)}
          >
            Add an item
          </Button>
        ) : (
          <form onSubmit={(e) => handleAddCheckListItem(e)}>
            <InputBase
              id="checkListItemName"
              placeholder="Add a checklist"
              sx={{
                flex: 1,
                bgcolor: "none",
                color: "white",
                border: `1px solid ${theme.palette.secondary.light}`,
                borderRadius: 2,
                fontFamily: theme.typography.fontFamily,
                padding: 1,
                width: "100%",
                mb: 2,
              }}
            />
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.text.primary,
                  width: "fit-content",
                  borderRadius: "4px",
                  fontFamily: theme.typography.fontFamily,
                  "&:hover": {
                    backgroundColor: theme.palette.secondary.light,
                    boxShadow: "none",
                  },
                }}
              >
                Add
              </Button>
              <Button
                onClick={() => setAddItemToggle(false)}
                sx={{
                  backgroundColor: "none",
                  color: theme.palette.text.primary,
                  width: "fit-content",
                  borderRadius: "4px",
                  fontFamily: theme.typography.fontFamily,
                }}
              >
                Cancel
              </Button>
            </Box>
          </form>
        )}
      </Box>
      <Notification />
    </Box>
  );
}

export default CheckList;
