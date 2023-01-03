import axios from "axios"

export const fetchUsers = async (data) => {
    try {
        const response = await axios.get("http://localhost:3001")
        return response.data
    }
    catch (err) {
        console.log(err.message);
    }
}