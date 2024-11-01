import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Typography,
  Button,
  Card,
  CardContent,
  Unstable_Grid2 as Grid,
  TextField,
  Popover,
  Container,
} from "@mui/material";

const apiKey = import.meta.env.VITE_API_KEY;
const apiToken = import.meta.env.VITE_API_TOKEN;

function Home() {
  const [boards, setBoards] = useState([]);
  const [newBoardName, setNewBoardName] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    fetchBoards();
  }, []);

  const fetchBoards = async () => {
    try {
      const response = await axios.get(
        `https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`
      );
      setBoards(response.data);
    } catch (error) {
      console.error("Error fetching boards:", error);
    }
  };

  const createBoard = async () => {
    try {
      const response = await axios.post(
        `https://api.trello.com/1/boards?key=${apiKey}&token=${apiToken}`,
        { name: newBoardName }
      );
      setBoards((prevState) => [...prevState, response.data]);
      setNewBoardName("");
      setAnchorEl(null);
    } catch (error) {
      console.error("Error creating board:", error);
    }
  };

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Container
      maxWidth="lg"
      sx={{
        padding: "20px",
        position: "relative",
        height: "calc(100vh - 60px)",
        backgroundImage: 'url("src/assets/background.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Boards
      </Typography>
      <Grid container spacing={3}>
        {boards.map((board) => (
          <Grid key={board.id} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ backgroundColor: "black", color: "white" }}>
              <CardContent>
                <Link to={`/boards/${board.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <Typography variant="h6" component="span">
                    {board.name}
                  </Typography>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
        <Grid xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardContent>
              <Button variant="contained" onClick={handlePopoverOpen}>
                Create Board
              </Button>
              <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <CardContent>
                  <TextField
                    label="New Board Name"
                    value={newBoardName}
                    onChange={(e) => setNewBoardName(e.target.value)}
                    sx={{ marginBottom: "8px", width: "200px" }}
                  />
                  <section>
                    <Button variant="contained" onClick={createBoard}>
                      Create
                    </Button>
                    <Button onClick={handlePopoverClose} color="secondary">
                      Cancel
                    </Button>
                  </section>
                </CardContent>
              </Popover>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
