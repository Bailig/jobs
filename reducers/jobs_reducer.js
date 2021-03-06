import T from '../actions/types'

const initialState = {
    results: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case T.JOBS_FETCH:
            return action.payload
        default:
            return state
    }
}