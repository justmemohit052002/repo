import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '../components/Searchbar'
// import SearchBarhome from '../components/Searchbar'

const HomeForStudent = () => {
  return (
    <View style={{flex:1 , alignItems:'center' ,backgroundColor:'#FFFFFF'}}>

  
      <View style={{ flex: 1, alignItems: 'center', marginTop: 40 }}>
        <Text style={styles.studentHomeHead}>Hey Rohan , </Text>
        <Text style={styles.studentHomeHead2}>Which tutor do you want to select ?</Text>
        <SearchBar/>
      </View>
      

      </View>
    

  )
}

const styles = StyleSheet.create({
  studentHomeHead: {
    fontSize: 30,
    fontWeight: '400',
    marginBottom:20 ,
    color:'#404040' ,
    fontFamily:'Poppins-Black'



  },

  studentHomeHead2: {
    fontSize: 18,
    color:'#888888' ,
    fontWeight:'400',
    fontFamily:'Poppins-Light'
    
    


  },
})

export default HomeForStudent