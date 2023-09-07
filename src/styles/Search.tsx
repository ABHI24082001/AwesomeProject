import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import images from '../assets/images'
import Animated, { useAnimatedStyle, useSharedValue, withTiming,  } from 'react-native-reanimated'



const Search = () => {

    const animation = useSharedValue(0);
    const[value, setValue] = useState(0)
    const animatedStyle= useAnimatedStyle(() =>{
        return{
            width: animation.value==1?withTiming(300,{duration: 500})
            : withTiming(0, {duration: 500})
        }
    })

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Animated.View
          style={[
            {
            width: 300,
            height: 50,
            backgroundColor: '#000',
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
          },
          animatedStyle,
          
          ]}>
            <TextInput style={{width: '85%'}} placeholder='Search' />
            <TouchableOpacity 
            onPress={() =>{
                if (animation.value == 1){
                    animation.value = 0;
                    setValue(0);
                }
                else{
                    animation.value = 1;
                    setValue(1)
                }
            }}>
                <Image
                  source={
                    animation.value == 1 
                    ? images.Glass
                    : images.Menu
                }
                  style={{width: 30 , height: 30}}
                
                />

            </TouchableOpacity>
            

        </Animated.View>
      
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})