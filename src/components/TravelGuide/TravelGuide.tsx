import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { dimensConstants } from '../../utils/constants/dimensConstants'
import { colors } from '../../utils/constants/colors'
import { STRING_CONSTANTS } from '../../utils/constants/stringConstants'
import { globalStyles } from '../../utils/globalStyles'
import TravelGuideTile from './TravelGuideTile'

const TravelGuide = () => {

    return (

        <View style = {styles.container}>
             <Text style = {[globalStyles.ag_body_bold, styles.title]}>{STRING_CONSTANTS.travel_guide}</Text>
             <TravelGuideTile />
        </View>
    )
}

const styles = StyleSheet.create({

    container : {
        flex: 1,
        backgroundColor : colors.green_shade3
    },
    title : {
        marginTop : dimensConstants.standard_margin,
        paddingLeft: dimensConstants.standard_padding,
        color: colors.green_shade1
    }
})

export default TravelGuide