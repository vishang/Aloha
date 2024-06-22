import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../utils/constants/colors'
import { STRING_CONSTANTS } from '../../utils/constants/stringConstants'
import { globalStyles } from '../../utils/globalStyles'
import { dimensConstants } from '../../utils/constants/dimensConstants'
import CategoryTile from './CategoryTile'
import { categories_tile } from '../../utils/mockData'


const Categories = () => {

    return (
        <View style = {styles.container}>
            <Text style = {[globalStyles.ag_body_bold, styles.title]}>{STRING_CONSTANTS.categories}</Text>
       
        {categories_tile.map((item,index) => (
            <CategoryTile key = {index + 1} data = {item} />
        ))}
            
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor: colors.green_shade3,
    },
    title : {
        marginTop : dimensConstants.standard_margin,
        paddingLeft: dimensConstants.standard_padding,
        color: colors.green_shade1
    }
})

export default Categories