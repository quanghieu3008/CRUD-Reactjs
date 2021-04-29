import { put, takeEvery } from 'redux-saga/effects'
import * as types from '../constant'
import fetchAddName from '../fetchAPI/addAPI'
import getAll from '../fetchAPI/getALL.js'
function* addNameSaga(action) {
    try {
        // console.log(res,"cdcdcdc...");
        let listData = yield getAll()
        let totalPage = Math.ceil(listData.length/5)
        const res = yield fetchAddName(action.payload)

        //phát dữ liệu( put)
        yield put({
           
            type: types.ADD_ITEM_SUCCESS,
            payload: res
        })
        yield put({
            type: types.GET_ITEM_REQUEST,
            payload:totalPage
            
            
        })
    }
    catch (error) {
        yield put({
            type: types.ADD_ITEM_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }

}
export const addPlayersaga = [
    takeEvery(types.ADD_ITEM_REQUEST, addNameSaga)
];