import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { dimensConstants } from '../../utils/constants/dimensConstants'
import { colors } from '../../utils/constants/colors'
import { STRING_CONSTANTS } from '../../utils/constants/stringConstants'
import { globalStyles } from '../../utils/globalStyles'


const ContactButton = () => {

    return (
        <View style = {styles.container}>
            <Text style = {[globalStyles.ag_body_bold, styles.text]}>{STRING_CONSTANTS.contact}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container : {
    width : 116,
    height : 40,
    borderRadius: dimensConstants.standard_borderRadius,
    borderWidth: 2,
    borderColor : colors.green_shade2,
    marginTop : 33,
    justifyContent: 'center',
    alignItems: 'center',
    },
    text: {
        color: colors.green_shade2,
    }
})

export default ContactButton