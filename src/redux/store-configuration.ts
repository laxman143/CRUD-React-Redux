import createSagaMiddleware from 'redux-saga'
import { createStore,applyMiddleware} from 'redux'
import RootReducer from './root-reducer';
import rootSaga from './root-saga';
const sagaMiddleware= createSagaMiddleware();
const store = createStore(RootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)

export default store