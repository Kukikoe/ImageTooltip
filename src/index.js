import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react'
import { StylesProvider } from '@material-ui/styles';

import App from './App.js';
import { appReducer } from './store/reduce';
import { watchAppSaga } from './store/sagas';

const persistConfig = {
    key: 'images',
    storage,
};

const persistedReducer = persistReducer(persistConfig, appReducer);

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(persistedReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
let persist = persistStore(store);

sagaMiddleware.run(watchAppSaga);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persist}>
            <StylesProvider injectFirst>
                <App />
            </StylesProvider>
        </PersistGate>
    </Provider>,
document.getElementById('root'));


