import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import { Home , Drive } from '../../screen';

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerShown: false,
}

export type Stacktrace = {Home: undefined ; Drive: undefined}



const PublicRoutes = () => {

    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen
              name='Home'
              component={Home}           
            />
            <Stack.Screen
            name='Drive'
            component={Drive}           
            />
        </Stack.Navigator>


    )

}

export default PublicRoutes

