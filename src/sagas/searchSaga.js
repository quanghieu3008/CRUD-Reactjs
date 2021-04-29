import { put, takeEvery } from 'redux-saga/effects'
import searchAPI from '../fetchAPI/searchAPI'
import * as types from '../constant'
function* searchSaga(action) {
    try {
        const listData = yield searchAPI(action.payload)
        console.log('list data saga', listData);
        yield put({
            type: types.SEARCH_ITEM_SUCCESS,
            payload: listData
        })
    } catch (error) {
        yield put({
            type: types.SEARCH_ITEM_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

export const searchItem = [
    takeEvery(types.SEARCH_ITEM_REQUEST, searchSaga)
];