import React from 'react'
import { Text } from 'react-native'
import { Button } from 'react-native-elements'

export default class ReviewScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Review Jobs',
        headerRight: <Button title='Go Right' onPress={() => {}} />
    })
    render() {
        return (
            <Text>
                {this.props.children}
                ReviewScreen
                ReviewScreen
                ReviewScreen
                ReviewScreen
                ReviewScreen
            </Text>
        )
    }
}

