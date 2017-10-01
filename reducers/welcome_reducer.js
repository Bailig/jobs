import T from '../actions/types'

const initialState = {
    attemptedFacebookLogin: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case T.FACEBOOK_LOGIN_ATTEMPTED:
            return { ...state, attemptedFacebookLogin: true }
        default:
            return state
    }
}