import{ put,takeEvery} from 'redux-saga/effects'
import * as types from '../constant'
import fetchDeleteAPI from '../fetchAPI/deleteAPI'

function*  deleteNameAction(action){
    try{
        // console.log('delete id', action.payload);
        
         yield fetchDeleteAPI(action.payload)
         yield put ({
            type:types.DELETE_ITEM_SUCCESS,
        })
        yield put({
            type:types.GET_ITEM_REQUEST,
        })
    }
    catch (error) {
        yield put({
            type: types.DELETE_ITEM_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
    
}
export const deletePlayerSaga=[
    takeEvery(types.DELETE_ITEM_REQUEST,deleteNameAction)
]