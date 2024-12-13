import { FETCH_USER_LOGIN_SUCCESS,FETCH_USER_LOGOUT } from '../action/useAction';
import { INCREMENT, DECREMENT } from '../action/counterAction';
import Password from 'antd/es/input/Password';

const INITIAL_STATE = {
    account: {
        access_token: '',
        refresh_token: '',
        username: '',
        firstname: '',
        lastname:  '',
        password: '',
        email: '',
        dob: ''
    },
    isAuthenticated: false   
    
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USER_LOGIN_SUCCESS :
            return {
                ...state, 
                account : {
                    access_token: action?.payload?.result?.access_token,
                    refresh_token: action?.payload?.result?.refresh_token,
                    username: action?.payload?.result?.username,
                    firstname: action?.payload?.result?.firstname,
                    lastname:  action?.payload?.result?.lastname,
                    password:  action?.payload?.result?.password,
                    email:  action?.payload?.result?.email,
                    dob:  action?.payload?.result?.dob

                },
                isAuthenticated: true  
            };

            case FETCH_USER_LOGOUT: // Thêm action cho đăng xuất
            return {
                ...state,
                account: INITIAL_STATE.account, // Đặt lại thông tin tài khoản
                isAuthenticated: false // Đặt isAuthenticated thành false khi đăng xuất
            };


        case DECREMENT:
            return {
                ...state, count: state.account - 1,
            };
        default: return state;
    }
};

export default userReducer;