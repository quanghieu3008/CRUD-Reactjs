import { all } from 'redux-saga/effects'
import {ItemSaga} from './ItemSaga'
import {addPlayersaga} from './addsaga'
import{deletePlayerSaga} from './deleteSaga'
import{updatePlayerSaga} from './updateSaga'
import{searchItem} from './searchSaga'
function* rootSaga() {
    yield all([
        ...ItemSaga,
        ...addPlayersaga,
        ...deletePlayerSaga,
        ...updatePlayerSaga,
        ...searchItem
        
    ]);
}
export default rootSaga;