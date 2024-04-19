import { MouseEventHandler } from "react"

import { cn } from "@/lib/utils"

interface IconButtonProps {
    className?: string
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined,
    icon: React.ReactNode
}

export const IconButton = ({
    className,
    onClick,
    icon
}: IconButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={cn(
                "rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition",
                className
            )}
        >
            {icon}
        </button>
    )
}