import axios from 'axios';
import {
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Popover,
} from "@mui/material";

const apiKey = import.meta.env.VITE_TRELLO_API_KEY;
const apiToken = import.meta.env.VITE_TRELLO_API_TOKEN;

const fetchBoards = async () => {
  try {
    const response = await axios.get('https://api.trello.com/1/members/me/boards', {
      params: {
        key: apiKey,
        token: apiToken,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching Trello boards:", error);
    throw error;
  }
};

fetchBoards().then((data) => console.log("Boards:", data));
