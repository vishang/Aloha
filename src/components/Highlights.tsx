import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { STRING_CONSTANTS } from '../utils/constants/stringConstants'
import { dimensConstants } from '../utils/constants/dimensConstants'
import { globalStyles } from '../utils/globalStyles'
import { colors } from '../utils/constants/colors'
import HightlightTile from './HighlightTile'
import { highlights_tile } from '../utils/mockData'



const Highlights = () => {

    return (
        <View style = {styles.container}>
            <Text style= {[globalStyles.ag_body_bold, styles.text]}>{STRING_CONSTANTS.hightlights}</Text>
            <ScrollView 
                horizontal
                showsHorizontalScrollIndicator= {false}
                contentContainerStyle = {styles.scrollViewContent}>
            {
                highlights_tile.map((item, index) => (
                    <HightlightTile key = {index + 1} data = {item} />
                ))
            }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

    container : {
        flex : 0.4,
        backgroundColor : colors.white,
    },
    text: {
     marginHorizontal : dimensConstants.standard_padding,
     marginTop : dimensConstants.standard_margin,
     color : colors.green_shade1
    },
    scrollViewContent: {
        flexDirection: 'row',
        paddingRight : dimensConstants.standard_padding,
        paddingBottom: dimensConstants.standard_margin
    }
})

export default Highlights