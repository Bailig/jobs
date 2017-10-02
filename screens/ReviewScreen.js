import React from 'react'
import ReactNative, { View, Text, ScrollView, Linking, Platform } from 'react-native'
import { Card, Button, Icon } from 'react-native-elements'
import { connect } from 'react-redux'
import { MapView } from 'expo'
import * as actions from '../actions'

class ReviewScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Review Jobs',
        tabBarIcon: ({ tintColor }) => {
            return <Icon name='favorite' size={28} color={tintColor} />
        },
        headerRight: (
            <ReactNative.Button 
                title='Settings' 
                onPress={() => navigation.navigate('settings')} 
            />
        )
    })

    renderLikedJobs() {
        return this.props.likes.map(job => {
            const initialRegion = {
                latitude: job.latitude,
                longitude: job.longitude,
                latitudeDelta: 0.045,
                longitudeDelta: 0.02
            }
            return (
                <Card title={job.jobtitle} key={job.jobkey}>
                    <View style={{ height: 200 }}>
                        <MapView
                            scrollEnabled={false}
                            style={{ flex: 1 }}
                            cacheEnabled={Platform.OS === 'android'}
                            scrollEnabled={false}
                            initialRegion={initialRegion}
                        />
                        <View style={styles.detailWrapperStyle}>
                            <Text style={styles.italics}>{job.company}</Text>
                            <Text style={styles.italics}>{job.formattedRelativeTime}</Text>
                        </View>
                        <Button 
                            title='Apply Now!'
                            backgroundColor='#03A9F4'
                            onPress={() => Linking.openURL(job.url)}
                        />
                    </View>
                </Card>
            )
        })
    }

    render() {
        return (
            <ScrollView>
                {this.renderLikedJobs()}
            </ScrollView>
        )
    }
}

const styles = {
    italics: {
        fontStyle: 'italic'
    },
    detailWrapperStyle: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
}

const mapStateToProps = ({ likes }) => {
    return { likes }
}

export default connect(mapStateToProps, actions)(ReviewScreen)
