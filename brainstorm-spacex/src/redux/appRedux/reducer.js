import * as action from './actionType'
const appState = {
    data: [],
    isLoading: false,
    isError: false,
    currentPage: 1,
    totalProd: 0,
    query : {}
}

export const appReducer = (state = appState, { type, payload }) => {
    switch (type) {
        case action.GET_CAPSULE_LOADING: {
            return {
                ...state,
                isLoading:true
            }
        }
        case action.GET_CAPSULE_SUCCESS: {
            return {
                ...state,
                data: payload.length>4 ?[...[...payload].splice(state.currentPage*4,4)]:payload,
                isLoading: false,
                totalProd:payload.length
            }
        }
        case action.GET_CAPSULE_FAILED: {
            return {
                ...state,
                isLoading: false,
                isError:true
            }
        }
        case action.INCREMENT_PAGE_NO: {
            return {
                ...state,
                currentPage : state.currentPage + payload
            }
        }
        case action.FILTER_CAPSULE: {
            return {
                ...state,
                query:{...payload}
            }
        }
        default: return state
    }
}