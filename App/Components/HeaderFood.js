import React, {
    Component
} from 'react';

import { Text } from 'react-native';

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

export default class HeaderFood extends Component {
    render() {
        return (
            <Container style={styles.headerContainer}>
                <Header style={styles.headerStyle}>
                    <Left style={{ flex: 1 }}>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon style={styles.iconStyle} name="md-arrow-back" />
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
