import { View, Text, Image,ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import styles from '../../styles/style';
import { addToCart, removeToCart } from './action';

const Cart = ({navigation}) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.reducer);

    const isItemAddedToCart = (item) => {
        return cartItems.some((cartItem) => cartItem.name === item.name);
      };
    
      const manageCartAction = (item) => {
        if (isItemAddedToCart(item)) {
          dispatch(removeToCart(item));
        } else {
          dispatch(addToCart(item));
        } 
      };
  return (
    <View>
            <ImageBackground resizeMode="cover" style={{height:1000,}}  source={{uri:'https://img.lovepik.com/background/20211021/large/lovepik-e-commerce-gradient-background-image_401394284.jpg'}}>

      <TouchableOpacity onPress={()=>{navigation.navigate("Products")}} style={{flexDirection:'row',alignItems:'center',margin:10,backgroundColor:'#48cae4',width:60,padding:5,borderRadius:10}}>
        <Text>
        Store
        </Text>
        <Image style={{width:20,height:20}} source={{uri:'https://cdn-icons-png.flaticon.com/128/3081/3081559.png'}} />
      </TouchableOpacity>
      <Text style={{marginTop:20,color:'#386641',fontWeight:'800',textAlign:'center'}}>Items Added to cart</Text>
      <ScrollView style={{marginBottom:200,}}>
      { cartItems.length>0 ?
        cartItems.map((item) =>(
            <TouchableOpacity style={[styles.itemContainer, {flexDirection:'row'}]} key={item.id} onPress={()=>navigation.navigate("ProductDetail",{item})}>
            <View style={{flexDirection:'row',}}>
            <Image source={{ uri: item.image }} style={styles.itemIage} />
            <View >
            <Text style={[styles.itemText,{height:70,marginTop:5,color:'#001d3d'}]}>{item.title}</Text>
           
            <Text style={[styles.itemText,{color:'#fb5607'}]}>PKR {item.price}</Text>
            </View>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => manageCartAction(item)}
            >
              <Text>
                Remove(-)
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )
        )
     :
     <View style={{alignItems:'center',marginTop:100,}}>
     <Text style={{marginTop:10,padding:10,fontSize:20,color:'white'}}>
        Nothing Added to Cart
     </Text> 
     </View>
      }
      </ScrollView>
      </ImageBackground>
    </View>
  )
 
}


export default Cart