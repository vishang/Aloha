import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { colors } from '../utils/constants/colors'
import { dimensConstants } from '../utils/constants/dimensConstants'
import { globalStyles } from '../utils/globalStyles';
import { fontSize } from '../utils/constants/fonts';
import ArrowButton from './ArrowButton';

export interface HighlightProps {
    id: number;
    title: string;
    subTitle: string;
    info: string;
    image: any; 
}

interface HighlightTileProps {
    data: HighlightProps;
}


const HightlightTile = ({ data } : HighlightTileProps) => {

    return (
        <View style = {styles.container}>
            <Image source={data.image} />
            <Text style={[globalStyles.ag_body_bold, styles.titleStyle]}>{data.title}</Text>
            <Text style={[globalStyles.ag_body, styles.subTitleStyle]}>{data.subTitle}</Text>
           
                <View style = {[StyleSheet.absoluteFill, styles.arrowButton]}>
            <ArrowButton containerStyle = {[ ]}/>
            
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        height: 340,
        width: 304,
        backgroundColor : colors.white,
        marginLeft : dimensConstants.standard_padding,
        borderRadius : dimensConstants.standard_borderRadius,
        marginTop: dimensConstants.secondary_padding,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 1.2,
        elevation: 2,
    },
    imageContainer : {
        height: 170,
    },
    titleStyle : {
        fontSize : fontSize.heading_size,
        paddingLeft: dimensConstants.secondary_padding,
        paddingTop: dimensConstants.secondary_padding,
        color : colors.green_shade2
    },
    subTitleStyle: {
        marginTop : dimensConstants.standard_padding,
        marginLeft: dimensConstants.secondary_padding,
        letterSpacing: -0.5
    },
    arrowButton : {
        top : 280, 
        left : 240
    }
})

export default HightlightTile