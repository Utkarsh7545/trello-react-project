import { apiKey, apiToken } from "../keyAndToken";
import axios from "axios";

export const getAllBoards = async () => {
    try {
        const response = await axios.get(
            `https://api.trello.com/1/members/me/boards?fields=name,url&key=${apiKey}&token=${apiToken}`
        )
        return response.data;
    } catch (error) {
        console.error("Error creating board:", error);
    }
};
