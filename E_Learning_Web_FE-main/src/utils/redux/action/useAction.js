export const FETCH_USER_LOGIN_SUCCESS='FETCH_USER_LOGIN_SUCCESS'
export const doLogin= (userData)=> {
    return{
        type: FETCH_USER_LOGIN_SUCCESS,
        payload: userData
    }
}
export const FETCH_USER_LOGOUT = 'FETCH_USER_LOGOUT';
export const userLogout = () => ({
    type: FETCH_USER_LOGOUT,
});
