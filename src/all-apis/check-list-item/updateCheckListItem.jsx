import { apiKey, apiToken } from "../keyAndToken";
import axios from "axios";

const updateCheckListItem = async (cardId,idCheckItem,state) => {
    try {
        const response = await axios.put(
            `https://api.trello.com/1/cards/${cardId}/checkItem/${idCheckItem}?&state=${state}&key=${apiKey}&token=${apiToken}`
        )
        return response.data;
    } catch (error) {
        console.error("Error creating board:", error);
    }
};

export default updateCheckListItem;