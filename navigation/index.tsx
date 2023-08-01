import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from '../components/redux/products';
import Cart from '../components/redux/cart';
import ProductDetail from '../components/redux/productDetail';


const Stack = createNativeStackNavigator();
function OurStack(){
    return(
<Stack.Navigator>
<Stack.Screen name='Products' component={Products} options={{headerShown:false}}/>
<Stack.Screen name='Cart' component={Cart} options={{headerShown:false}}/>
<Stack.Screen name='ProductDetail' component={ProductDetail} options={{headerShown:false}}/>
</Stack.Navigator>
    )
}

export default OurStack