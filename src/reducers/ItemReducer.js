import * as types from '../constant'
const DEFAULT_STATE = {
    activePage:null,
    totalPage:10,
    listItem: [],
    dataFetched: false,
    isFetching: false,
    error: false,
    errorMessage: null,
    listData: [],
}

export default (state = DEFAULT_STATE, action) => {
    // console.log('reducer', state.listData);

    switch (action.type) {
        case types.GET_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true
            }

        case types.GET_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                listItem: action.payload[0],
                activePage:action.payload[1]
            }
        case types.GET_ITEM_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }
        case types.ADD_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case types.SEARCH_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        case types.SEARCH_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                listItem: action.payload
            }
        case types.SEARCH_ITEM_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }
        default:
            return state;

    }
}