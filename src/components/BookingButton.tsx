import React from 'react'
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import { dimensConstants } from '../utils/constants/dimensConstants'
import { colors } from '../utils/constants/colors'
import { STRING_CONSTANTS } from '../utils/constants/stringConstants'
import { globalStyles } from '../utils/globalStyles'

interface BookingProps {
    containerStyle ?: StyleProp<ViewStyle>
}

const BookingButton = ({ containerStyle = {} } : BookingProps) => {

    return (
        <View style = {[styles.container, containerStyle]}>
            <Text style = {[globalStyles.ag_body_bold, styles.title]}>{STRING_CONSTANTS.book_trip}</Text>
        </View>
    )

}

const styles = StyleSheet.create({

    container : {
        marginHorizontal : dimensConstants.standard_padding,
        height : 46,
        backgroundColor: colors.green_shade2,
        borderRadius: dimensConstants.standard_borderRadius,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 2,
    },
    title : {
        color : colors.white,

    }
})

export default BookingButton