import React from 'react'
import { Image, StyleProp, StyleSheet, View, ViewProps } from 'react-native'
import { colors } from '../utils/constants/colors'
import { dimensConstants } from '../utils/constants/dimensConstants'
import { images } from '../utils/constants/assets'

interface ArrowButtonProps {
    containerStyle : StyleProp<ViewProps>
}


const ArrowButton = ({ containerStyle } : any) => {

    return (
        <View style = {[styles.container, containerStyle]}>
            <Image source={images.forward_arrow} />
        </View>
    )
}

const styles = StyleSheet.create({

    container : {
        height : 40,
        width: 40,
        backgroundColor : colors.green_shade3,
        borderRadius : 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight : dimensConstants.secondary_padding,
        
    }
})

export default ArrowButton