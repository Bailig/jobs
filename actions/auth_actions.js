import { AsyncStorage } from 'react-native'
import { Facebook } from 'expo'

import T from './types'

export const facebookLogin = () => async (dispatch) => {
    const token = await AsyncStorage.getItem('fb_token')
    if (token) {
        dispatch({ type: T.FACEBOOK_LOGIN_SUCCESS, payload: token })
    } else {
        doFacebookLogin(dispatch)
    }
}

const doFacebookLogin = async (dispatch) => {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
        '896250723864024', 
        { permissions: ['public_profile'] }
    )
    if (type === 'cancel') {
        return dispatch({ type: T.FACEBOOK_LOGIN_FAIL })
    }
    await AsyncStorage.setItem('fb_token', token)
    dispatch({ type: T.FACEBOOK_LOGIN_SUCCESS, payload: token })
}