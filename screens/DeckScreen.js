import React from 'react'
import { View, Text, Platform } from 'react-native'
import { connect } from 'react-redux'
import { Card, Button, Icon } from 'react-native-elements'
import { MapView } from 'expo'
import Swipe from '../components/Swipe'
import * as actions from '../actions'

class DeckScreen extends React.Component {
    static navigationOptions = {
        title: 'Jobs',
        tabBarIcon: ({ tintColor }) => {
            return <Icon name='description' size={28} color={tintColor} />
        }
    }

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
                    />
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
        return (
            <Card title='No more jobs'>
                <Button 
                    title='Back To Map'
                    large
                    icon={{ name: 'my-location' }}
                    backgroundColor='#03A9F4'
                    onPress={() => this.props.navigation.navigate('map')}
                />
            </Card>
        )
    }

    render() {
        return (
            <View style={{ marginTop: 10 }}>
                <Swipe 
                    data={this.props.jobs.results}
                    renderCard={this.renderCard}
                    renderNoMoreCards={this.renderNoMoreCards.bind(this)}
                    onSwipeRight={job => this.props.likeJob(job)}
                    keyProp='jobkey'
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

export default connect(mapStateToProps, actions)(DeckScreen)