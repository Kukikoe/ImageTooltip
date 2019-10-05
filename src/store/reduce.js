import {ADD_IMAGE_SUCCESS, DELETE_IMAGE_SUCCESS, UPDATE_IMAGE_SUCCESS} from "./consts";

const initialState = {
    images: [],
};

export const appReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_IMAGE_SUCCESS:
            return addImageSuccess(state, payload);

        case DELETE_IMAGE_SUCCESS:
            return deleteImageSuccess(state, payload);

        case UPDATE_IMAGE_SUCCESS:
            return updateImageSuccess(state, payload);

        default:
            return state;
    }
};

const addImageSuccess = (state, payload) => {
    return {
        ...state,
        images: [
            ...state.images,
            payload,
        ],
    }
};

const deleteImageSuccess = (state, payload) => {
    const images = state.images.filter(image => image.id !== payload);

    return {
        ...state,
        images,
    }
};

const updateImageSuccess = (state, payload) => {
    const { id } = payload;
    const images = state.images.filter(image => image.id !== id);

    return {
        ...state,
        images: [
            ...images,
            payload,
        ]
    }
};