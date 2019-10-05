import { put, takeEvery } from 'redux-saga/effects';

import {ADD_IMAGE_REQUEST, DELETE_IMAGE_REQUEST, UPDATE_IMAGE_REQUEST} from "./consts";
import { actionAddImageSuccess, actionDeleteImageSuccess, actionUpdateImageSuccess } from "./actions";

export function* watchAppSaga() {
    yield takeEvery(ADD_IMAGE_REQUEST, handleAddImage);
    yield takeEvery(DELETE_IMAGE_REQUEST, handleDeleteImage);
    yield takeEvery(UPDATE_IMAGE_REQUEST, handleUpdateImage);
}

function* handleAddImage({ payload }) {
    yield put(actionAddImageSuccess({ ...payload }));
}

function* handleDeleteImage({ payload }) {
   yield put(actionDeleteImageSuccess(payload));
}

function* handleUpdateImage({ payload }) {
   yield put(actionUpdateImageSuccess(payload));
}