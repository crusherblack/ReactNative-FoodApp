import React from 'react'
import { Container, List, Left, ListItem, Body, Icon } from 'native-base'
import { Text } from 'react-native'


export default class Sidebar extends React.Component {
    render() {
        return (
            <Container style={{
                backgroundColor: 'white',
                paddingTop: 40
            }}>
                <List>
                    <ListItem itemDivider>
                        <Text>Food</Text>
                    </ListItem>
                    <ListItem button onPress={this.props.goToBurgers}>
                        <Left ><Icon type="MaterialCommunityIcons" name="hamburger" style={{
                            fontSize: 22
                        }} /></Left>
                        <Body>
                            <Text>Burgers</Text>
                        </Body>
                    </ListItem>
                    <ListItem button onPress={this.props.goToPizza}>
                        <Left><Icon type="MaterialCommunityIcons" name="pizza" style={{
                            fontSize: 22
                        }} /></Left>
                        <Body>
                            <Text>Pizza</Text>
                        </Body>
                    </ListItem>
                    <ListItem button onPress={this.props.goToChicken}>
                        <Left><Icon type="MaterialCommunityIcons" name="bowl" style={{
                            fontSize: 22
                        }} /></Left>
                        <Body>
                            <Text>Chicken</Text>
                        </Body>
                    </ListItem>

                    <ListItem itemDivider>
                        <Text>Drinks</Text>
                    </ListItem>
                    <ListItem >
                        <Left><Icon type="Entypo" name="drink" style={{
                            fontSize: 22
                        }} /></Left>
                        <Body>
                            <Text>Top Drinks</Text>
                        </Body>
                    </ListItem>
                </List>

            </Container>
        )
    }
}