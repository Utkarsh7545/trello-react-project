import { apiKey, apiToken } from "../keyAndToken";
import axios from "axios";

export const getCheckLists = async (cardId) => {
    try {
        const response = await axios.get(
            `https://api.trello.com/1/cards/${cardId}/checklists?key=${apiKey}&token=${apiToken}`
        )
        return response.data;
    } catch (error) {
        console.error("Error creating board:", error);
    }
};
