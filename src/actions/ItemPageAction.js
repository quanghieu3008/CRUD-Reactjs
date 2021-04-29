import * as types from '../constant'
export function getListItem(payload) {
    return ({
        type: types.GET_ITEM_REQUEST,
        payload
    })
}
export function addNameAction(payload) {
    return ({
        type: types.ADD_ITEM_REQUEST,
        payload
    })
}
export function deleteNameAction(payload) {
    

    return ({
        type: types.DELETE_ITEM_REQUEST,
        payload
    })
}
export function updateNameAction(payload) {
    return ({
        type: types.UPDATE_ITEM_REQUEST,
        payload
    })
}
export function searchAction(payload) {
    return ({
        type: types.SEARCH_ITEM_REQUEST,
        payload
    })
}