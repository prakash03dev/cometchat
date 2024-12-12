import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";
import { tailwindMergeConfig } from "../_configs/tailwindMerge.config";
import { createTV } from "tailwind-variants";


const twMerge = extendTailwindMerge({ extend: tailwindMergeConfig });
export const cn = (...inputs: ClassValue[]) => {

    return twMerge(clsx(inputs))
}

export const tv = createTV({
    twMergeConfig: tailwindMergeConfig,
})
