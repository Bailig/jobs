import _ from 'lodash'
import T from '../actions/types'

export default (state = [], action) => {
    switch (action.type) {
        case T.JOB_LIKE:
            return _.uniqBy([
                action.payload, 
                ...state
            ], 'jobkey')
        case T.JOB_LIKED_CLEAR:
            return []
        default:
            return state
    }
}