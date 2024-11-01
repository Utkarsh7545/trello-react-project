import { apiKey, apiToken } from "../keyAndToken";
import axios from "axios";

const createCheckList = async (checkListName, id) => {
    try {
        const response = await axios.post(
            `https://api.trello.com/1/checklists?idCard=${id}&name=${checkListName}&key=${apiKey}&token=${apiToken}`
        )
        return response.data;
    } catch (error) {
        console.error("Error creating board:", error);
    }
};

export default createCheckList;