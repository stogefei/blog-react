import {getUserInfo} from '../api/user'
const AUTH_SUCCESS = 'AUTH_SUCCESS';
const ERROR_MSG = 'ERROR_MSG';
const HIDE_TAB = 'HIDE_TAB';
const initState={
    redirectTo:'',
    msg:'',
    showHeaderTab: false
};
// reducer
export function user(state=initState, action){
    switch(action.type){
        case AUTH_SUCCESS:
            return {...state, msg:'', redirectTo:'/',...action.payload};
        case ERROR_MSG:
            return {...state, msg:'', redirectTo:'/',...action.payload};
        case HIDE_TAB:
            return {...state, showHeaderTab: action.payload.type, ...action.payload};
        default:
            return state
    }
}
function authSuccess(obj){
    return {type: AUTH_SUCCESS, payload:obj}
}
function errorMsg(msg){
    return { msg, type:ERROR_MSG }
}
function hideHeader(data){
    return { payload: data, type: HIDE_TAB }
}

//获取用户信息
export function getUser(){
    return dispatch=>{
        getUserInfo()
            .then((res) => {
                if (res.status === 200 &&res.data.errno === 0) {
                    dispatch(authSuccess(res.data.data))
                }else{
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }
}

    // 头部隐藏
export function hideTab(payload) {
    return dispatch=> {
        dispatch(hideHeader(payload))
    }
}
