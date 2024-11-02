import Notification from "../components/common/Notification";
import { getCheckLists } from "../all-apis/check-list/getCheckLists";
import CheckList from "./CheckList";
import { createCheckList } from "../all-apis/check-list/createCheckList";
import { deleteCheckList } from "../all-apis/check-list/deleteCheckList";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  InputBase,
  Typography,
  Box,
} from "@mui/material";
import { useTheme } from "@emotion/react";

function Card({ modal, handleCardModal, data, setLoading }) {
  const theme = useTheme();
  const [checkLists, setCheckLists] = useState([]);
  const [createCheckListToggle, setCreateCheckListToggle] = useState(false);
  const [checkListName, setCheckListName] = useState("");

  const handleCreateCheckList = async (e, id) => {
    e.preventDefault();
    setLoading(true);
    try {
      const newCheckList = await createCheckList(checkListName, id);
      setCheckLists((prev) => [...prev, newCheckList]);
      toast.success("Checklist created successfully");
      setCheckListName("");
      setCreateCheckListToggle(false);
    } catch (error) {
      toast.error("Failed to create checklist");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCheckList = async (id) => {
    try {
      setLoading(true);
      await deleteCheckList(id);
      setCheckLists((prev) => prev.filter((checkList) => checkList.id !== id));
      toast.success("Checklist deleted successfully");
    } catch (error) {
      toast.error("Failed to delete checklist");
    } finally {
      setLoading(false);
    }
  };

  const fetchCheckLists = async () => {
    try {
      setLoading(true);
      const fetchedCheckLists = await getCheckLists(data.id);
      setCheckLists(fetchedCheckLists);
    } catch (error) {
      toast.error("Failed to fetch checklists");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCheckLists();
  }, []);

  return (
    <>
      <Dialog open={modal} onClose={handleCardModal} maxWidth="md" fullWidth>
        <Box
          sx={{
            background: theme.palette.primary.dark,
            border: `1px solid ${theme.palette.primary.main}`,
            overflow: "hidden",
          }}
        >
          <DialogTitle
            id="dialog-title"
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                color: theme.palette.text.secondary,
                borderBottom: `1px solid ${theme.palette.secondary.main}`,
                width: "100%",
              }}
            >
              {data.name}
            </Typography>
            <IconButton
              aria-label="close"
              onClick={handleCardModal}
              sx={{
                color: theme.palette.secondary.light,
              }}
            >
              <FontAwesomeIcon icon={faTimes} />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            {createCheckListToggle ? (
              <form onSubmit={(e) => handleCreateCheckList(e, data.id)}>
                <InputBase
                  autoFocus
                  id="checklist-name"
                  placeholder="Checklist name"
                  sx={{
                    bgcolor: "none",
                    color: theme.palette.text.primary,
                    border: `1px solid ${theme.palette.secondary.main}`,
                    borderRadius: 2,
                    padding: 1,
                    width: "100%",
                    fontFamily: theme.typography.fontFamily,
                    mb: 1,
                  }}
                  value={checkListName}
                  onChange={(e) => setCheckListName(e.target.value)}
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor:theme.palette.primary.main,
                    color: theme.palette.text.primary,
                    borderRadius: "4px",
                    fontFamily: theme.typography.fontFamily,
                    "&:hover": {
                      backgroundColor: theme.palette.secondary.main,
                      boxShadow: "none",
                    },
                  }}
                >
                  Create
                </Button>
                <Button
                  onClick={() => setCreateCheckListToggle(false)}
                  sx={{ color: theme.palette.secondary.extraLight }}
                >
                  Cancel
                </Button>
              </form>
            ) : (
              <Button
                variant="contained"
                onClick={() => setCreateCheckListToggle(true)}
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: "#fff",
                  width: "200px",
                  height: "50px",
                  borderRadius: "4px",
                  fontFamily: "Poppins, sans-serif",
                  "&:hover": {
                    backgroundColor: theme.palette.secondary.main,
                    boxShadow: "none",
                  },
                }}
              >
                Create Checklist
              </Button>
            )}
            <Box
              style={{
                maxHeight: "70vh",
                overflowY: "auto",
                margin: "20 0px 20 0px",
                gap: 20,
                display: "flex",
                marginTop: 20,
                flexDirection: "column",
              }}
            >
              {checkLists.map((checklist) => (
                <CheckList
                  key={checklist.id}
                  cardId={data.id}
                  data={checklist}
                  handleDeleteCheckList={handleDeleteCheckList}
                  setLoading={setLoading}
                />
              ))}
            </Box>
          </DialogContent>
        </Box>
      </Dialog>

      <Notification />
    </>
  );
}

export default Card;
