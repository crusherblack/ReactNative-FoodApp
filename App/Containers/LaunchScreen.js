import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Drawer } from 'native-base';

// Styles
import styles from './Styles/LaunchScreenStyles';

import Sidebar from '../Containers/Sidebar'
import HeaderLanding from '../Components/HeaderLanding';
import PromoFoodItem from '../Components/PromoFoodItem';

let BurgerImage = require('../Images/burger.jpg');
let PizzaImage = require('../Images/pizza.jpg');
let ChickenImage = require('../Images/kfc.jpg');
let HotDogImage = require('../Images/hotdog.jpg');

export default class LaunchScreen extends Component {
	closeDrawer = () => {
		this.drawer._root.close();
	}

	openDrawer = () => {
		this.drawer._root.open();
	}

	goToBurgers = () => {
		this.props.navigation.navigate('FoodScreen', {
			foodTitles: ['BBQ Burger', 'Spicy Burger', 'Big Burger'],
			foodDescriptions: ['Awesome BBQ Burger', 'Very Spice Burger for those whose like spicy things', 'A burger for those whose very hungry'],
			prices: ['10', '14', '15'],
			foodImages: [BurgerImage, PizzaImage, ChickenImage],
			foodSize: 3
		});
		this.closeDrawer();
	}

	//add more methods here for other menu

	render() {
		const { navigate } = this.props.navigation;

		return (
			<Drawer ref={(ref) => { this.drawer = ref; }}
				content={
					<Sidebar
						goToBurgers={this.goToBurgers}
						goToPizza={this.goToPizza}
						goToChicken={this.goToChicken} />
					//call from here
				}
				onClose={() => this.closeDrawer()}>
				<View style={styles.mainContainer}>
					<HeaderLanding openDrawer={this.openDrawer} navigation={this.props.navigation} />
					<ScrollView style={styles.scroll}>
						<PromoFoodItem image={BurgerImage} text={"BURGERS"} navigation={navigate}
							foodTitles={['BBQ Burger', 'Spicy Burger', 'Big Burger']}
							foodDescriptions={['Awesome BBQ Burger', 'Very Spice Burger for those whose like spicy things', 'A burger for those whose very hungry']}
							prices={['10', '14', '15']}
							images={[BurgerImage, PizzaImage, ChickenImage]}
							foodSize={3} />
						<PromoFoodItem image={PizzaImage} text={"PIZZA"} navigation={navigate}
							foodTitle={'Pizza Cheese'}
							foodTitles={['Pizza Burger', 'Pizza Burger']}
							foodDescriptions={['Awesome Pizza Burger', 'Very Spice Pizza for those whose like spicy things']}
							prices={['10', '14']}
							images={[PizzaImage, ChickenImage]}
							foodSize={2} />
						<PromoFoodItem image={ChickenImage} text={"CHICKEN"} navigation={navigate}
							foodTitle={'KFC Chicken'}
							foodTitles={['BBQ Burger', 'Spicy Burger', 'Big Burger']}
							foodDescriptions={['Awesome BBQ Burger', 'Very Spice Burger for those whose like spicy things', 'A burger for those whose very hungry']}
							prices={['10', '14', '15']}
							images={[BurgerImage, PizzaImage, ChickenImage]}
							foodSize={3} />

					</ScrollView>

				</View>
			</Drawer>
		);
	}
}
