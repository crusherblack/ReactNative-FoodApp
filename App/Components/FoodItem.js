import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

// Styles
import styles from './Styles/FoodItemStyles';

export default class FoodItem extends Component {
    render() {

        return (
            <TouchableOpacity onPress={() => alert('FoodItem')} >
                <View style={styles.fooditemView}>
                    <View style={styles.priceView}>
                        <Text style={styles.priceText}>{this.props.price}$</Text>
                    </View>

                    <View style={styles.foodImageView}>
                        <Image style={styles.foodImage} source={this.props.foodImage} resizeMode='cover' />
                    </View>
                    <View style={styles.foodDescriptionView}>
                        <View style={styles.foodTextView}>
                            <Text style={styles.foodTitle}>{this.props.foodTitle}</Text>
                            <Text style={styles.foodDescription}>{this.props.foodDescription}</Text>
                        </View>
                    </View>
                </View>
            </ TouchableOpacity >

        );
    }
}
