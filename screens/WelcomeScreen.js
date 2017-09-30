import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { AppLoading } from 'expo';
import Slides from '../components/Slides'
import * as actions from '../actions'

const SLIDE_DATA = [
    { text: 'Welcome to Jobs', color: '#009688' },
    { text: 'Set your location, then find your dream job.', color: '#03A9F4' }
]

class WelcomeScreen extends Component {
    componentWillMount() {
        if (!this.props.auth.attemptedFacebookLogin) {
            this.props.attemptFacebookLogin()
        }
    }

    componentWillReceiveProps(newProps) {
        this.onAttemptFacebookLoginComplete(newProps)
    }

    onAttemptFacebookLoginComplete(props) {
        if (props.auth.token) {
            this.props.navigation.navigate('map')
        }
    }

    onSlidesComplete() {
        this.props.navigation.navigate('auth')
    }

    render() {
        if (!this.props.auth.attemptedFacebookLogin) {
            return <AppLoading />
        }
        return (
            <View style={{ flex: 1 }}>
                <Slides 
                    data={SLIDE_DATA} 
                    onComplete={this.onSlidesComplete.bind(this)}
                />
            </View>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    return { auth }
}
export default connect(mapStateToProps, actions)(WelcomeScreen)