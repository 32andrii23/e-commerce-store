import { Product } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
    try {
        const res = await axios.get(`${URL}/${id}`);
        return res.data;
    } catch (error) {
        console.error("Error fetching product:", error);
        throw error;
    }
};

export default getProduct;

