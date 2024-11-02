import { apiKey, apiToken } from "../keyAndToken";
import axios from "axios";

export const archiveList = async (listId) => {
    try {
        const response = await axios.put(
            `https://api.trello.com/1/lists/${listId}/closed?value=true&key=${apiKey}&token=${apiToken}`
        )
        return response.data;
    } catch (error) {
        console.error("Error creating board:", error);
    }
};
