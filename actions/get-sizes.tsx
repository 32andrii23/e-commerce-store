import { Size } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
    try {
        const res = await axios.get(URL);
        return res.data;
    } catch (error) {
        console.error("Error fetching sizes:", error);
        throw error;
    }
};

export default getSizes;

