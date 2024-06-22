import { StyleSheet } from "react-native";
import { fontSize, fonts } from "./constants/fonts";
import { dimensConstants } from "./constants/dimensConstants";


export const globalStyles = StyleSheet.create({
    ag_body_bold : {
        fontSize : fontSize.title_size,
        fontFamily: fonts.primary_bold_font,
        lineHeight : fontSize.line_height
    },
    ag_body : {
        fontSize : fontSize.title_size,
        fontFamily: fonts.primary_font,
        lineHeight : fontSize.line_height
    },
    ag_header: {
        fontSize: fontSize.heading_size,
        fontFamily : fonts.primary_bold_font,
    }
})