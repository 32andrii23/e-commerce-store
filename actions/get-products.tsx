import { Product } from "@/types";

import axios from "axios";
import queryString from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
    categoryId?: string,
    sizeId?: string,
    colorId?: string,
    isFeatured?: boolean
}

const getProducts = async (query: Query): Promise<Product[]> => {
    const url = queryString.stringifyUrl({
        url: URL,
        query: {
            colorId: query.colorId,
            categoryId: query.categoryId,
            sizeId: query.sizeId,
            isFeatured: query.isFeatured,
        }
    });
    
    try {
        const res = await axios.get(url);
        return res.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};

export default getProducts;

