import React, { Component } from 'react';
import { Text, View } from 'react-native';

// Styles

import styles from './Styles/FoodScreenStyles';
import HeaderFood from '../Components/HeaderFood';
import FoodItem from '../Components/FoodItem'
import { Content } from 'native-base';


export default class FoodScreen extends Component {
    componentWillMount() {
        const { navigation } = this.props;
        title = navigation.getParam('title', '');
        foodImages = navigation.getParam('foodImages', '');
        foodTitles = navigation.getParam('foodTitles', '');
        prices = navigation.getParam('prices', '');
        foodSize = navigation.getParam('foodSize', '');
        foodDescriptions = navigation.getParam('foodDescriptions', '');
    }

    render() {

        var foodItems = [];
        for (let i = 0; i < foodSize; i++) {
            foodItems.push(
                <View>
                    <FoodItem
                        foodTitle={foodTitles[i]}
                        price={prices[i]}
                        foodImage={foodImages[i]}
                        foodDescription={foodDescriptions[i]}
                    ></FoodItem>
                </View>
            )
        }
        return (
            <View style={styles.mainContainer}>
                <HeaderFood navigation={this.props.navigation} />
                <Content style={styles.titleTextContent}>
                    <Text style={styles.titleText}>
                        {title}
                    </Text>

                    {foodItems}

                </Content>
            </View>
        );
    }
}
