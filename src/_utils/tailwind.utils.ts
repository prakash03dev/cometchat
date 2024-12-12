import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";
import { tailwindMergeConfig } from "../_configs/tailwindMerge.config";


const twMerge = extendTailwindMerge({ extend: tailwindMergeConfig });
export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs))
}

