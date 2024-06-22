import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { dimensConstants } from '../../utils/constants/dimensConstants'
import { colors } from '../../utils/constants/colors'
import { travel_guide } from '../../utils/mockData'
import { globalStyles } from '../../utils/globalStyles'
import { STRING_CONSTANTS } from '../../utils/constants/stringConstants'
import { images } from '../../utils/constants/assets'
import ContactButton from './ContactButton'

const TravelGuideTile = () => {

    return (
        <View style = {[style.container, style.title]}>
            <View style = {style.flexStyle}>

                <View>
                    <Text style = {[globalStyles.ag_header, style.nameStyle]}>{travel_guide.name}</Text>
                    <Text style = {[globalStyles.ag_body, style.subTitle]}>{STRING_CONSTANTS.guide_since + ' ' + travel_guide.year}</Text>
                    <ContactButton />
                </View>

                <Image source = {images.user} style = {style.iconStyle} />
            </View>
        </View>
    )
}

const style = StyleSheet.create({

    container : {
        marginHorizontal : dimensConstants.standard_padding,
        backgroundColor: colors.white,
        // height: 176,
        marginTop : dimensConstants.standard_padding,
        borderRadius: dimensConstants.standard_borderRadius
    },
    title : {
        padding: dimensConstants.secondary_padding
    },
    subTitle: {
        marginTop : 15,
        color: colors.green_shade1
    },
    nameStyle : {
        color: colors.green_shade1
    },
    flexStyle : {
        flexDirection : 'row',
        justifyContent :'space-between'
    },
    iconStyle : {
        marginTop : 8
    }
})

export default TravelGuideTile