import React from "react";
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer} from "@react-navigation/native"
import  { NativeBaseProvider}  from "native-base"
import Routes from "./src/Routes";


const App = () => {
  
  return(
   
       <NavigationContainer>  
         <NativeBaseProvider>   
            <Routes/>
         </NativeBaseProvider>      
       </NavigationContainer>
    
   
  )
}



export default App