import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import {useEffect,useState} from 'react'
const Header = () => {
  const cartData= useSelector((state)=>state.reducer)
  const [items,setCartItems] = useState(0);
  useEffect(() =>{
    setCartItems(cartData.length)
  },[cartData])
  

  return ( 
    <View>
      <Text>Cart: {items}</Text>
    </View>
  )
}

export default Header