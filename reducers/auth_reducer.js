import T from '../actions/types'

const initialState = {
    token: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case T.FACEBOOK_LOGIN_SUCCESS:
            return { ...state, token: action.payload }
        case T.FACEBOOK_LOGIN_FAIL:
            return { ...state, token: null }
        default:
            return state
    }
}