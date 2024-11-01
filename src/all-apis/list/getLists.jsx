import { apiKey, apiToken } from "../keyAndToken";
import axios from "axios";

export const getLists = async (boardId) => {
    try {
        const response = await axios.get(
            `https://api.trello.com/1/boards/${boardId}/lists?key=${apiKey}&token=${apiToken}`
        )
        return response.data;
    } catch (error) {
        console.error("Error creating board:", error);
    }
};
