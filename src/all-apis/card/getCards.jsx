import { apiKey, apiToken } from "../keyAndToken";
import axios from "axios";

const getCards = async (listId) => {
    try {
        const response = await axios.get(
            `https://api.trello.com/1/lists/${listId}/cards?key=${apiKey}&token=${apiToken}`
        )
        return response.data;
    } catch (error) {
        console.error("Error creating board:", error);
    }
};

export default getCards;