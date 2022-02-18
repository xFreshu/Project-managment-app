import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'react-devtools-extension';
import rootReducer from './rootReducers';
import thunk from 'react-thunk';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
