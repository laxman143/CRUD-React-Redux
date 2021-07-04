import { REQUEST_LOGIN } from "./login-type";
import {  takeEvery, put } from 'redux-saga/effects';
import { loginSuccess, loginFailure } from "./login-action";

export function* waitForLogin(){
    yield takeEvery(REQUEST_LOGIN,login);
}

function* login(){
     try {
        yield put(loginSuccess(true));
     }
     catch(e) {
        yield put(loginFailure('Login Error'))
     }
}