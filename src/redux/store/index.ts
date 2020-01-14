import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from '@app/redux/reducers';
import { rootSaga } from '@app/redux/sagas';
import { initialState } from './initialState';

const sagaMiddleware = createSagaMiddleware();
let middleware = [sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);

export default store;
