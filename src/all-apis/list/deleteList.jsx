import { apiKey, apiToken } from "../keyAndToken";
import axios from "axios";

const deleteList = async (listId) => {
    try {
        const response = await axios.post(
            `https://api.trello.com/1/lists?name=${listName}&idBoard=${boardId}&key=${apiKey}&token=${apiToken}`
        )
        return response.data;
    } catch (error) {
        console.error("Error creating board:", error);
    }
};

export default deleteList;