import{put, takeEvery} from 'redux-saga/effects'
import * as types from '../constant'
import fetchUpdateName from '../fetchAPI/updateAPI'
function* updateNameSaga(action){
    try{
        // console.log('update saga:::::....', action.payload);
        const res = yield fetchUpdateName(action.payload)
        yield put({
            type:types.UPDATE_ITEM_SUCCESS,
            payload:res
        })
        yield put({
            type:types.GET_ITEM_REQUEST,
        })
    }
    catch (error){
        yield put({
            type:types.UPDATE_ITEM_FAILURE,
            payload:{
                errorMessage:error.message
            }
        })
    }
}
export const updatePlayerSaga =[
    takeEvery(types.UPDATE_ITEM_REQUEST,updateNameSaga)
]