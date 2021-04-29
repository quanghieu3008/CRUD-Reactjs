import { put, takeEvery } from 'redux-saga/effects'
import getItems from '../fetchAPI/getItems'
import * as types from '../constant'
import getAll from '../fetchAPI/getALL'

function* getListItem(action) {
    
    
    try {
        const res = yield getItems(action.payload)
        let totaPage = Math.cell(listData.length/5)
        let listData = yield  getAll()
        yield put({
            type: types.GET_ITEM_SUCCESS,
            payload: [res,action.payload]
            // activePage:action.payload,
            // totaPage
        })
    } catch (error) {
        yield put({
            type: types.GET_ITEM_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

export const ItemSaga = [
    takeEvery(types.GET_ITEM_REQUEST, getListItem)
];