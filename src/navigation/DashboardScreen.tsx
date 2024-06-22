import React from 'react'
import { ImageBackground, ImageComponent, ScrollView, StyleSheet, Text, View } from 'react-native'
import { images } from '../utils/constants/assets'
import { fonts } from '../utils/constants/fonts'
import GradientText from '../components/GradientText'
import Highlights from '../components/Highlights'
import Categories from '../components/Categories/Categories'
import { colors } from '../utils/constants/colors'
import TravelGuide from '../components/TravelGuide/TravelGuide'

const DashboardScreen = () => {

    return (
        <ScrollView contentContainerStyle = {styles.container}>

            <ImageBackground resizeMode= 'stretch' source = {images.dashboard_bg} style = {styles.imageContainer}>
                <View style = {{marginBottom : 80}}>
            <GradientText style = {styles.gradientText} />
            </View>
            </ImageBackground>
            

            <Highlights />

            <Categories />

            <TravelGuide />
           
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    container : {
        flexGrow : 1,
        backgroundColor: colors.green_shade3,
        paddingBottom : 90
    },
    imageContainer : {
        width : '100%',
        height: 480,
        justifyContent : 'center',
        alignItems : 'center'
    },
    title : {
        fontFamily: fonts.primary_bold_font,
        fontSize : 56,
        color: 'white',
        textAlign : 'center'
    },
    gradientText : {
        fontSize : 56, 
        textAlign: 'center'
    }
})

export default DashboardScreen