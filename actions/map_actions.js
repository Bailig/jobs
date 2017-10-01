import T from './types'

export const mapLoaded = () => {
    return { type: T.MAP_LOADED }
}

export const updateMapRegion = (region) => {
    return { type: T.MAP_REGION_UPDATE, payload: region }
}