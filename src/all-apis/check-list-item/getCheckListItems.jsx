import { apiKey, apiToken } from "../keyAndToken";
import axios from "axios";

const getCheckListItems = async (id) => {
    try {
        const response = await axios.get(
            `https://api.trello.com/1/checklists/${id}/checkItems?key=${apiKey}&token=${apiToken}`
        )
        return response.data;
    } catch (error) {
        console.error("Error creating board:", error);
    }
};

export default getCheckListItems;