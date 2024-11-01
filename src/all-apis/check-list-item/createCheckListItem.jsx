import { apiKey, apiToken } from "../keyAndToken";
import axios from "axios";

const createCheckListItem = async (checkListItemName, id) => {
    try {
        const response = await axios.post(
            `https://api.trello.com/1/checklists/${id}/checkItems?name=${checkListItemName}&key=${apiKey}&token=${apiToken}`
        )
        return response.data;
    } catch (error) {
        console.error("Error creating board:", error);
    }
};

export default createCheckListItem;