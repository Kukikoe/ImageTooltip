import {
    ADD_IMAGE_REQUEST,
    ADD_IMAGE_SUCCESS,
    DELETE_IMAGE_REQUEST,
    DELETE_IMAGE_SUCCESS,
    UPDATE_IMAGE_REQUEST,
    UPDATE_IMAGE_SUCCESS
} from './consts';

export const actionAddImageRequest = payload => ({
    type: ADD_IMAGE_REQUEST,
    payload,
});

export const actionAddImageSuccess = payload => ({
    type: ADD_IMAGE_SUCCESS,
    payload,
});

export const actionDeleteImageRequest = payload => ({
    type: DELETE_IMAGE_REQUEST,
    payload,
});

export const actionDeleteImageSuccess = payload => ({
    type: DELETE_IMAGE_SUCCESS,
    payload,
});

export const actionUpdateImageRequest = payload => ({
    type: UPDATE_IMAGE_REQUEST,
    payload,
});

export const actionUpdateImageSuccess = payload => ({
    type: UPDATE_IMAGE_SUCCESS,
    payload,
});