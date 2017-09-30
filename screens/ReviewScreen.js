import React from 'react'
import { Text, Button } from 'react-native'

export default class ReviewScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Review Jobs',
        headerRight: (
            <Button 
                title='Settings' 
                onPress={() => navigation.navigate('settings')} 
            />
        )
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

