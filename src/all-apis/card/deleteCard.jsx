import { apiKey, apiToken } from "../keyAndToken";
import axios from "axios";

const deleteCard = async (id) => {
    try {
        const response = await axios.delete(
            `https://api.trello.com/1/cards/${id}?key=${apiKey}&token=${apiToken}`
        )
        return response.data;
    } catch (error) {
        console.error("Error creating board:", error);
    }
};

export default deleteCard;