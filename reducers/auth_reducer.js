import T from '../actions/types'

const initialState = {
    token: null,
    attemptedFacebookLogin: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case T.FACEBOOK_LOGIN_SUCCESS:
            return { ...state, token: action.payload }
        case T.FACEBOOK_LOGIN_FAIL:
            return { ...state, token: null }
        case T.FACEBOOK_LOGIN_ATTEMPTED:
            return { ...state, attemptedFacebookLogin: true }
        default:
            return state
    }
}