"use client";

import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-cart";

export const NavbarActions = () => {
    const [ismounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])
    
    const router = useRouter();
    const cart = useCart();
    
    if (!ismounted) {
        return null;
    }


    return (
        <div className="ml-auto flex items-center gap-x-4">
            <Button
                className="flex items-center rounded-full bg-black px-4 py-2"
                onClick={() => router.push("/cart")}
            >
                <ShoppingBag
                    size={20}
                    color="white"
                />
                <span className="ml-2 text-sm font-medium text-white">
                    {cart.items.length}
                </span>
            </Button>
        </div>
    )
}