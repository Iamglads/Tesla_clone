import React from 'react'
import { Dimensions, FlatList, View } from 'react-native'
import cars from './cars'
import CartItem from '../CarItem/CartItem'



import styles from './styles'


const CarsList = (props) => {
    return (
       <View style={styles.container}>
            <FlatList 
                data={ cars }
                renderItem={({ item }) => <CartItem car={ item }/> }
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
       </View>
    )
}

export default CarsList
