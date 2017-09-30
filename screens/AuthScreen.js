import React from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions'

class AuthScreen extends React.Component {
    componentDidMount() {
        this.props.facebookLogin()
        // this.onAuthComplete(this.props)
    }

    componentWillReceiveProps(newProps) {
        this.onAuthComplete(newProps)
    }

    onAuthComplete(props) {
        if (props.token) {
            this.props.navigation.navigate('map')
        }
    }

    render() {
        return <Text />
    }
}

const mapStateToProps = ({ auth }) => {
    return { token: auth.token }
}

export default connect(mapStateToProps, actions)(AuthScreen)