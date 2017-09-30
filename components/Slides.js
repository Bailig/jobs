import React from 'react'
import { Text, View, ScrollView, Dimensions } from 'react-native'
import { Button } from 'react-native-elements'

const SCREEN_WIDTH = Dimensions.get('window').width;

const Slides = ({ data, onComplete }) => {
    const { slideStyle, textStyle, buttonStyle } = styles

    const renderLastSlide = (index) => {
        if (index === data.length - 1) {
            return (
                <Button 
                    title='Onwards!' 
                    raised 
                    buttonStyle={buttonStyle}
                    onPress={onComplete}
                />
            )
        }
    }

    const renderSildes = () => {
        return data.map((slide, index) => {
            return (
                <View key={index} style={[slideStyle, { backgroundColor: slide.color }]}>
                    <Text style={textStyle}>{slide.text}</Text>
                    {renderLastSlide(index)}
                </View>
            )
        })
    }

    return (
        <ScrollView 
            horizontal
            pagingEnabled
        >
            {renderSildes()}
        </ScrollView>
    )
}


const styles = {
    slideStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH
    },
    textStyle: {
        fontSize: 30,
        color: 'white',
        marginLeft: 16,
        marginRight: 16,
    },
    buttonStyle: {
        backgroundColor: '#0288D1',
        marginTop: 16
    }
}

export default Slides