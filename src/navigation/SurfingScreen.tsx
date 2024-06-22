import React from 'react'
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import { colors } from '../utils/constants/colors'
import { highlights_tile, top_spots } from '../utils/mockData'
import { images } from '../utils/constants/assets'
import GradientText2 from '../components/GradientText2'
import { dimensConstants } from '../utils/constants/dimensConstants'
import { fonts } from '../utils/constants/fonts'
import { STRING_CONSTANTS } from '../utils/constants/stringConstants'
import TravelGuide from '../components/TravelGuide/TravelGuide'
import TopSpotTile from '../components/Surfing/TopSpotTile'

const SurfingScreen = () => {

    return (
        <ScrollView contentContainerStyle = {styles.container}>

            <View style = { styles.containerView}>
            <ImageBackground source={images.surfing_screen_bg} resizeMode= 'cover' style = {styles.imageStyle}>
            <View style = {{marginTop : 140}}>
            <GradientText2 style = {styles.gradientText} />
            </View>
            </ImageBackground>

                <Text style = {styles.content}>{highlights_tile[0].info}</Text>
                <Text style = {styles.header}>{STRING_CONSTANTS.top_spot}</Text>
            

            {
                top_spots.map((item, index) => (
                    <TopSpotTile key = {item.id} data = {item} />
                ))
            }
            </View>
        <TravelGuide />
        </ScrollView>
    )
}
const styles = StyleSheet.create({

    container : {
        flexGrow : 1,
        backgroundColor: colors.green_shade3,
        paddingBottom : 90,
    },
    imageStyle : {
        width : '100%',
        height: 360,
        backgroundColor : 'red',
        alignSelf : 'flex-start',
    },
    gradientText : {
        fontSize : 56, 
        textAlign: 'center',
    },
    content : {
        marginTop : dimensConstants.standard_margin,
        fontFamily: fonts.primary_font,
        fontSize : 16,
        lineHeight : 24,
        marginHorizontal : dimensConstants.standard_padding,
        color: colors.green_shade1
    },
    header: {
        fontFamily: fonts.primary_bold_font,
        fontSize : 16,
        color: colors.green_shade1,
        lineHeight: 20,
        marginTop : dimensConstants.standard_margin,
        marginHorizontal : dimensConstants.standard_padding
    },
    containerView : {
        backgroundColor : colors.white,
        paddingBottom : 50
    }
})

export default SurfingScreen