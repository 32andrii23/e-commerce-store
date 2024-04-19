import { Color } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
    try {
        const res = await axios.get(URL);
        return res.data;
    } catch (error) {
        console.error("Error fetching colors:", error);
        throw error;
    }
};

export default getColors;

