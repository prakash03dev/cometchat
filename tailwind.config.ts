import type { Config } from 'tailwindcss';
import { COLORS } from './src/_consts/colors.const';
import { FONT_FAMILY, FONT_WEIGHT, FONT_SIZE, LINE_HEIGHT } from './src/_consts/font.const';
import { FLEX, BORDER_RADIUS, CONTENT, Z_INDEX } from "./src/_consts/theme.const";

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: COLORS,
		fontFamily: FONT_FAMILY,
		fontWeight: FONT_WEIGHT,
		fontSize: FONT_SIZE,
		lineHeight: LINE_HEIGHT,
		extend: {
			flex: FLEX,
			borderRadius: BORDER_RADIUS,
			content: CONTENT,
			zIndex: Z_INDEX,
		}
	},

	plugins: []
} satisfies Config;
