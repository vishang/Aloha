import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { dimensConstants } from '../../utils/constants/dimensConstants'
import { colors } from '../../utils/constants/colors'
import { globalStyles } from '../../utils/globalStyles';
import { images } from '../../utils/constants/assets';

export interface CategoryProps {
    id: number;
    title: string;
}

interface CategoryTileProps {
    data: CategoryProps;
}


const CategoryTile = ({ data } : CategoryTileProps) => {

    return (
        <View style = {styles.container}>
            <Text style= {[globalStyles.ag_body, styles.title]}>{data.title}</Text>
            <Image source={images.forward_arrow} style={styles.iconStyle} />
        </View>
    )
}

const styles = StyleSheet.create({

    container : {
        height : 68,
        marginHorizontal : dimensConstants.standard_padding,
        backgroundColor: colors.white,
        marginTop : dimensConstants.standard_padding,
        borderRadius: dimensConstants.standard_borderRadius,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    title : {
        paddingLeft : dimensConstants.standard_padding,
        alignSelf: 'center',
        color: colors.green_shade1
    },
    iconStyle : {
        margin: dimensConstants.secondary_padding,
        alignSelf: 'center'
    }
})

export default CategoryTile