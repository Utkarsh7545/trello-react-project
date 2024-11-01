import { apiKey, apiToken } from "../keyAndToken";
import axios from "axios";

const createCard = async (cardName, listId) => {
    try {
        const response = await axios.post(
            `https://api.trello.com/1/cards?idList=${listId}&name=${cardName}&key=${apiKey}&token=${apiToken}`
        )
        return response.data;
    } catch (error) {
        console.error("Error creating board:", error);
    }
};

export default createCard;