import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { MapView } from 'expo'
import * as actions from '../actions'

class MapScreen extends React.Component {
    componentDidMount() {
        this.props.mapLoaded()
    }

    onRegionChangeComplete(region) {
        this.props.updateMapRegion(region)
    }

    onButtonPress() {
        this.props.fetchJobs(this.props.map.region, () => {
            this.props.navigation.navigate('deck')
        })
    }

    renderMap() {
        if (!this.props.map.mapLoaded) {
            return <ActivityIndicator />
        }
        return (
            <MapView 
                region={this.props.map.region}
                onRegionChangeComplete={this.onRegionChangeComplete.bind(this)}
                style={styles.mapStyle} 
            />
        )
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                {this.renderMap()}
                <View style={styles.buttonContainerStyle}>
                    <Button 
                        large
                        title='Search This Area'
                        backgroundColor='#009688'
                        icon={{ name: 'search' }}
                        onPress={this.onButtonPress.bind(this)}
                    />
                </View>
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        justifyContent: 'center'
    },
    mapStyle: {
        flex: 1
    },
    buttonContainerStyle: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0
    }
}

const mapStateToProps = ({ map, jobs }) => {
    return { map, jobs }
}

export default connect(mapStateToProps, actions)(MapScreen)