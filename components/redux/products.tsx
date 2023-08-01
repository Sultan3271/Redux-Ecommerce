// Products.js
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/style';
import { addToCart, removeToCart } from './action';
import { useDispatch, useSelector } from 'react-redux';

 const Products = ({navigation}) => {

    const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const url = "https://fakestoreapi.com/products";
      const res = await fetch(url);
      const data = await res.json();
      
      // Filter products with the "electronics" category
      const electronicsProducts = data.filter(product => product.category === "electronics" || product.category === "jewelery" );
      
      // Set the filtered products in the state
      setProducts(electronicsProducts);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect (()=>{
    getProducts();
  },[])

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.reducer);

  const isItemAddedToCart = (item) => {
    return cartItems.some((cartItem) => cartItem.title === item.title);
  };

  const manageCartAction = (item) => {
    if (isItemAddedToCart(item)) {
      dispatch(removeToCart(item));
    } else {
      dispatch(addToCart(item));
    } 
  };

  return (
    <View style={styles.container}>
      <ImageBackground resizeMode="cover" style={{height:1000,marginBottom:30,}}  source={{uri:'https://img.lovepik.com/background/20211021/large/lovepik-e-commerce-gradient-background-image_401394284.jpg'}}>
      <View style={{padding:10}}>
        <TouchableOpacity onPress={()=>{navigation.navigate("Cart")}} style={{flexDirection:'row',backgroundColor:'#0077b6',padding:5,borderRadius:10,width:60,alignItems:'center',}}>
          <Text style={{fontFamily:'arial',fontSize:20,padding:5}}>{cartItems.length}</Text>
          <Image style={{width:20,height:20,}} source={{uri:'https://cdn-icons-png.flaticon.com/128/4290/4290854.png'}} />
        </TouchableOpacity>
      </View>
      <ScrollView style={{marginBottom:100,}}>
        <View
          style={{
            marginBottom: 120,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            
          }}>
          { products.length>0? products.map((item) => (
            <TouchableOpacity style={styles.itemContainer} key={item.id} onPress={()=>navigation.navigate("ProductDetail",{item})}>
              <Image source={{ uri: item.image }} style={styles.itemIage} />
              <Text style={[styles.itemText,{color:'#001d3d'}]}>{item.title}</Text>
              
              <Text style={[styles.itemText,{color:'#fb5607'}]}>PKR {item.price}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => manageCartAction(item)}>
                <Text>
                  {isItemAddedToCart(item) ? 'Remove from cart' : 'Add to cart'}
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          )) 
          : <Text style={{color:'#006d77',fontSize:20,textAlign:'center'}}> Loading...</Text>
        }
        </View>
      </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Products;
