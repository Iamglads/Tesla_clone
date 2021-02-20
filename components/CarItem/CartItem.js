import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import StyledButton from '../StyledButton/StyledButton'
import styles from './styles'




function CartItem(props) {

    const { name, tagline, taglineCTA, image } = props.car


    return (
        <View style= { styles.container}>
            <ImageBackground 
                source={ image }
                style= { styles.image}
            />

            <View style= { styles.titles }>
                <Text style={styles.title}> { name }</Text>
                <Text style={styles.subtitle}>{ tagline }</Text>
                <Text style={styles.subtitleCTA}>{ taglineCTA }</Text>
            </View>

            <View style={ styles.buttonsContainer}>
                <StyledButton 
                    type="Primary"
                    content={ "Existing Inventory"}
                    onPress= {() => {
                        alert('Existing Invenory was pressed')
                    }}
                />
                <StyledButton 
                    type="secondary"
                    content={ "Existing Inventory"}
                    onPress= {() => {
                        alert('Existing Invenory was pressed')
                    }}
                />
            </View>
        </View>
    )
}

export default CartItem
