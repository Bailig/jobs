import { AsyncStorage } from 'react-native'
import T from './types'

export const attemptFacebookLogin = () => async (dispatch) => {
    const token = await AsyncStorage.getItem('fb_token')
    if (token) {
        dispatch({ type: T.FACEBOOK_LOGIN_SUCCESS, payload: token })
    }
    dispatch({ type: T.FACEBOOK_LOGIN_ATTEMPTED })
}
