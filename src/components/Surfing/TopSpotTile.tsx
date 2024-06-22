import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { dimensConstants } from '../../utils/constants/dimensConstants'
import { fonts } from '../../utils/constants/fonts'
import { colors } from '../../utils/constants/colors'

export interface TopSpotTileProps {
    id : number,
    title: string,
    image: string
}

interface TopSpotProps {
    data : TopSpotTileProps
}

const TopSpotTile = ({ data } : TopSpotProps) => {

    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>{data.id + '. ' + data.title }</Text>
            <Image source={data.image} style = {styles.imageStyle}/>
        </View>
    )
}

const styles = StyleSheet.create({

    container : {
        height: 63,
        marginHorizontal : dimensConstants.standard_padding,
        marginTop : 12,
        borderRadius : 4,
        backgroundColor : 'white',
        justifyContent: 'space-between',
        elevation: 3,
        flexDirection: 'row'
        
    },
    title : {
        fontFamily : fonts.primary_bold_font,
        fontSize : 16,
        marginLeft : dimensConstants.standard_padding,
        color : colors.green_shade2,
        alignSelf: 'center'
    },
    imageStyle : {
        width : 140
    }
})

export default TopSpotTile