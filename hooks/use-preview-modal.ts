import { create } from "zustand";

import { Product } from "@/types";

interface PreviewModalStore {
    isOpen: boolean,
    onOpen: (data: Product) => void,
    onClose: () => void
    data?:Product,
}

const usePreviewModal = create<PreviewModalStore>(set => ({
    isOpen: false,
    data: undefined,
    onOpen: (data: Product) => set({ data: data, isOpen: true }),
    onClose: () => set({ isOpen: false })
}))

export default usePreviewModal;