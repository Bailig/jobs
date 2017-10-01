import T from '../actions/types'

const initialState = {
    mapLoaded: false,
    region: {
        longitude: -122,
        latitude: 37,
        longitudeDelta: 0.04,
        latitudeDelta: 0.09
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case T.MAP_LOADED:
            return { ...state, mapLoaded: true }
        case T.MAP_REGION_UPDATE:
            return { ...state, region: action.payload }    
        default:
            return state
    }
}