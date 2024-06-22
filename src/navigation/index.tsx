import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import HomeStack from './HomeStack'

const Navigation = () => {

    return (
        <NavigationContainer>
            <HomeStack />
        </NavigationContainer>
    )
}

export default Navigation