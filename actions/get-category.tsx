import { Category } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
    try {
        const res = await axios.get(`${URL}/${id}`);
        return res.data;
    } catch (error) {
        console.error("Error fetching category:", error);
        throw error;
    }
};

export default getCategory;

