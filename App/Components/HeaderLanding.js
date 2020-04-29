import React, {
  Component
} from 'react';

import { Text, View } from 'react-native';

import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon
} from 'native-base';

import styles from './Styles/HeaderScreenStyles';

export default class HeaderLanding extends Component {
  render() {
    return (
      <Container style={styles.headerContainer}>
        <Header style={styles.headerStyle}>
          <Left style={{ flex: 1 }}>
            <Button transparent onPress={() => this.props.openDrawer()}>
              <Icon style={styles.iconStyle} name="ios-menu" />
            </Button>
          </Left>
          <Body style={{ flex: 1 }}>
            <Text style={styles.titleText}>Foodstagram</Text>
          </Body>
          <Right style={{ flex: 1 }}>
            <Button transparent onPress={() => this.props.navigation.navigate('Cart')}>
              <Icon style={styles.iconStyle} type="FontAwesome5" name="shopping-cart" />
            </Button>
          </Right>
        </Header>
      </ Container>
    );
  }
}
