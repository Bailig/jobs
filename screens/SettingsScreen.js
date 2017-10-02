import React from 'react'
import { Platform } from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import * as actions from '../actions'

class SettingsScreen extends React.Component {
    static navigationOptions = {
        headerStyle: {
            marginTop: Platform.OS === 'android' ? 24 : 0
        }
    }

    render() {
        return (
            <Button 
                title='Clear All Liked Jobs!'
                large
                icon={{ name: 'delete-forever' }}
                backgroundColor='#F44336'
                onPress={this.props.clearLikes}
            />
        )
    }
}

export default connect(null, actions)(SettingsScreen)