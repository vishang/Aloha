import React from 'react'
import { Dimensions, GestureResponderEvent, Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../utils/constants/colors'
import { images } from '../utils/constants/assets'
import { Styles } from 'react-native-svg'
import { fonts } from '../utils/constants/fonts'
import BookingButton from './BookingButton'

interface BottomTabButtonProps {
    isSelected : boolean | undefined,
    title : string,
    iconPath: ImageSourcePropType,
    onPress ?: (event: GestureResponderEvent) => void
}

const BottomTabButton = ({ isSelected , title, iconPath, onPress = () => {}, ...props} : BottomTabButtonProps) => {
    const { width, height } = Dimensions.get('window')
    // console.log('My Props are', props)
    return (
        <>
        <BookingButton containerStyle = {[StyleSheet.absoluteFill, { top : -60}]} />
        <Pressable onPress={onPress}  style = {styles.container(width, isSelected)}>
            <Image source={iconPath} 
                  style = {styles.iconStyle} />
            <Text style = {styles.text(isSelected)}>{title}</Text>
        </Pressable>
        </>
    )
}

const styles = StyleSheet.create<Styles | any>({

    container : (width : any, isSelected : boolean) => ({
        borderBottomWidth:  3,
        borderBottomColor: isSelected ? colors.green_shade1 : colors.white,
        width : width / 4,
        justifyContent: 'center',
    }),
    text : (isSelected : boolean) => ({
        alignSelf : 'center',  
        marginBottom : 10,
        fontFamily : fonts.primary_bold_font,
        color : isSelected ? colors.green_shade2 : colors.green_shade1
    }),
    iconStyle : {
        alignSelf : 'center',
        marginTop : 10,
        height : 24,
        width : 24
    }
})

export default BottomTabButton