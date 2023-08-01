import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import {useRoute} from '@react-navigation/native'
import styles from '../../styles/style'

const ProductDetail = ({navigation}) => {
    const route=useRoute()
  const detail= route.params?.item;

  return (
    <View style={{marginTop:20,}}>
        <ScrollView>
       <View style={{alignItems:'center'}}>
        <Image style={{width:350,height:350}} source={{uri:detail.image}} />
       </View>
       <View style={{padding:10,margin:5,}}>
        <Text style={{fontSize:18,}}>
            {detail.title}
        </Text>
       </View>
       <View style={{padding:10,margin:5,}}>
        <Text style={{fontSize:18,fontWeight:'600',color:'#fb5607'}}>Description</Text>
        <Text style={{fontSize:18,}}>
            {detail.description}
        </Text>
       </View>
       <View style={{padding:10,margin:5,}}>
        <Text style={{fontSize:18,fontWeight:'600',color:'#fb5607'}}>
            Price
        </Text>
        <Text style={{fontSize:18,}}>
            {detail.price} $
        </Text>
       </View>
       <View style={{padding:10,margin:5,alignItems:'center'}}>
        <TouchableOpacity style={{backgroundColor:'#3a86ff',padding:10,borderRadius:5,}} onPress={()=>navigation.navigate("Products")}>
            <Text>
                Go Back
            </Text>
        </TouchableOpacity>
       </View>
       </ScrollView>
    </View>
  )
} 

export default ProductDetail