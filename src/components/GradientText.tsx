import MaskedView from '@react-native-masked-view/masked-view';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, { Text as SvgText, Defs, LinearGradient as SvgLinearGradient, Stop } from 'react-native-svg';
import { fonts } from '../utils/constants/fonts';

const GradientText = (props) => {

  return (
    <>
    <MaskedView maskElement={<Text style = 
    {[props.style, {backgroundColor : 'transparent', fontFamily : fonts.primary_bold_font, marginTop : 20, color : 'white'}]}
    >{'Welcome'}</Text>}>
        <LinearGradient
         colors={['rgba(255, 255, 255, 0.5)', 'rgba(225, 225, 225, 0.7)']}
         locations={[0.4, 0.6]}
         >
        <Text style = {[props.style, {opacity : 0, fontFamily : fonts.primary_bold_font, color : 'white'}]}>{'Welcome'}</Text>
        </LinearGradient>
    </MaskedView>
    <MaskedView maskElement={<Text style = {[props.style, {backgroundColor : 'transparent', fontFamily : fonts.primary_bold_font, color : 'white'}]}>{'to Hawaii'}</Text>}>
        <LinearGradient
         colors={['rgba(255, 255, 255, 0.7)', 'rgba(255, 255, 255, 0.9)']}
         locations={[0.4, 0.6]}
         >
        
            <Text style = {[props.style, {opacity : 0, fontFamily : fonts.primary_bold_font , color : 'white'}]}>{'to Hawaii'}</Text>
       
        </LinearGradient>
    </MaskedView>
    </>
  );
};

const styles = StyleSheet.create({
  maskedContainer : {
    
  }
})

export default GradientText;