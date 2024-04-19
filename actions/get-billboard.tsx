import { Billboard } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
    try {
        const res = await axios.get(`${URL}/${id}`);
        return res.data;
    } catch (error) {
        console.error("Error fetching billboards:", error);
        throw error;
    }
};

export default getBillboard;

