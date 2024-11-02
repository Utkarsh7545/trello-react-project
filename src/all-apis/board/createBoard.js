import { apiKey, apiToken } from "../keyAndToken";
import axios from "axios";

export const createBoard = async (boardName) => {
    try {
        const response = await axios.post(
            `https://api.trello.com/1/boards/?name=${boardName}&key=${apiKey}&token=${apiToken}`
        )
        return response.data;
    } catch (error) {
        console.error("Error creating board:", error);
    }
};
