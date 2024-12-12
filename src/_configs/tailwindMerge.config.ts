import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from "../_consts/font.const";
import { COLORS } from '../_consts/colors.const';
// import { FLEX, BORDER_RADIUS, CONTENT, Z_INDEX } from "../_consts/theme.const";

export const tailwindMergeConfig = {
    classGroups: {
        "font-size": [
            {
                text: Object.keys(FONT_SIZE),
            },
        ],
        "font-weight": [
            {
                font: Object.keys(FONT_WEIGHT),
            },
        ],
        "font-family": [
            {
                font: Object.keys(FONT_FAMILY),
            },
        ],
        "text-color": [
            {
                text: Object.keys(COLORS),
            },
        ],
        "flex": [
            {
                flex: Object.keys(COLORS),
            },
        ]
    },
}
