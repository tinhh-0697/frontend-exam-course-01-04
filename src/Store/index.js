import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './rootSaga';
import { LoginReducer } from '../Store/Login/reducer';
import { SetThyme } from '../Store/SetThyme/reducer';
import { Articles } from '../Store/Articles/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
var rootReducer = combineReducers({
  LoginReducer: LoginReducer,
  SetThyme: SetThyme,
  Articles: Articles
});
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
