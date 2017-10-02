import { combineReducers } from 'redux'
import auth from './auth_reducer'
import welcome from './welcome_reducer'
import map from './map_reducer'
import jobs from './jobs_reducer'
import likes from './likes_reducer'

export default combineReducers({
    auth,
    welcome,
    map,
    jobs,
    likes
})