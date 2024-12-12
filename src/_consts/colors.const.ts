export enum COLORS {
    grayscale_01 = "#fafaff",
    grayscale_12 = "#14131d",

    grayscale_dark_01 = "#0a0914",
    grayscale_dark_08 = "#54535b",


    brand_01 = "#fcfcfe",
    brand_06 = "#d8d2f4",
    brand_09 = "#6852d6",
    brand_dark_07 = "#45368D",
    brand_dark_09 = "#6852d6",

    orange_06 = "#ffd2bb",
    orange_07 = "#ffc1a1",
    orange_09 = "#ff7129",
    orange_dark_08 = "#b15324",
    orange_dark_09 = "#ff7f3e",

    red_05 = "#fbd3cd",
}

export type ColorProps = keyof typeof COLORS;
