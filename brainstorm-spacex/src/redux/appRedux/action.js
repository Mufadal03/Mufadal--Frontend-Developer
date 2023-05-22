import axios from 'axios'
import * as action from './actionType'

export const getCapsule = (query) => async dispatch=> {
    dispatch({ type: action.GET_CAPSULE_LOADING })
    try {
        const { data } = await axios.get('https://api.spacexdata.com/v3/capsules')
        dispatch({type:action.GET_CAPSULE_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:action.GET_CAPSULE_FAILED})
    }
}

export const handleIncrementPage = (val) => dispatch => {
    dispatch({ type: action.GET_CAPSULE_LOADING })
    dispatch({ type: action.INCREMENT_PAGE_NO, payload: val })
    
}