import * as action from './actionType'
export const signUp = (payload) => dispatch => {
    const users = JSON.parse(localStorage.getItem('Users')) || []
    console.log(users)
    const isExist = users.length > 0 && (users.find((elem) => elem.email===payload.email ))
    if (isExist) return 'User already Exist'
    users.push(payload)
    localStorage.setItem('Users', JSON.stringify(users))
    return true
}

export const login = (payload) => dispatch => {
    const { email, password } = payload 
    const userData = JSON.parse(localStorage.getItem('Users'))
    const isvalid = userData.find({ email, password })
    if (isvalid) {
        dispatch({type:action.LOGIN_SUCCESS,payload})
        return true 
    }
    return 'Invalid credentials'
}