import { apiKey, apiToken } from "../keyAndToken";
import axios from "axios";

export const deleteCheckList = async (id) => {
    try {
        const response = await axios.delete(
            `https://api.trello.com/1/checklists/${id}?key=${apiKey}&token=${apiToken}`
        )
        return response.data;
    } catch (error) {
        console.error("Error creating board:", error);
    }
};
