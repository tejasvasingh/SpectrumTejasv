import { legacy_createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import mainReducer from './reducer/mainReducer';

let store = legacy_createStore(mainReducer, applyMiddleware(thunk));

export default store;