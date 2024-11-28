import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [randomBackgroundColor,setRandomBackgroundColor]=useState('#ffffff')
  const generateColor=()=>{
    const hex="0123456789ABCDEF"
    let color='#'

    for(let i=0;i<6;i++)
    {
       color+=hex[Math.round(Math.random()*16)];
    }
    setRandomBackgroundColor(color)
  }
  
  return (
    <>
      <StatusBar backgroundColor={randomBackgroundColor}/>
      <View style={[styles.container,{backgroundColor:randomBackgroundColor}]}>
         <TouchableOpacity onPress={()=>{
          generateColor()
          
         }}>
           <View style={[styles.actionBtn,{}]}>
             <Text style={[styles.actionBtnText]}>Press Me</Text>
           </View>
         </TouchableOpacity>
      </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  actionBtn:{
    borderRadius:12,
    backgroundColor:'#6A1B4D',
    paddingVertical:10,
    paddingHorizontal:40
  },
  actionBtnText:{
    color:'#ffffff',
    textTransform:'uppercase'
  }
})