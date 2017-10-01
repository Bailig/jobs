import React from 'react'
import { View, Text, Platform } from 'react-native'
import { connect } from 'react-redux'
import { Card, Button } from 'react-native-elements'
import { MapView } from 'expo'
import Swipe from '../components/Swipe'

class DeckScreen extends React.Component {
    renderCard(job) {
        const initialRegion = {
            latitude: job.latitude,
            longitude: job.longitude,
            latitudeDelta: 0.045,
            longitudeDelta: 0.02
        }
        return (
            <Card title={job.jobtitle} >
                <View style={{ height: 300 }} >
                    <MapView
                        scrollEnabled={false}
                        style={{ flex: 1 }}
                        cacheEnabled={Platform.OS === 'android'}
                        initialRegion={initialRegion}
                    >
                    </MapView>
                </View>
                <View style={styles.detailWrapperStyle} >
                    <Text>{job.company}</Text>
                    <Text>{job.formattedRelativeTime}</Text>
                </View>
                <Text>
                    {job.snippet.replace(/<b>/g, '').replace(/<\/b>/g, '')}
                </Text>
            </Card>
        )
    }

    renderNoMoreCards() {
        return <Card title='No more jobs' />
    }

    render() {
        return (
            <View>
                <Swipe 
                    data={this.props.jobs.results}
                    renderCard={this.renderCard}
                    renderNoMoreCards={this.renderNoMoreCards}
                />
            </View>
        )
    }
}

const styles = {
    detailWrapperStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10
    }
}

const mapStateToProps = ({ jobs }) => {
    return { jobs }
}

export default connect(mapStateToProps)(DeckScreen)