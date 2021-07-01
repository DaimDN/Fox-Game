import {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import ROOT_REDUCERS from '../Reducers/index'

const INITIALSTATE : Object = {};
const MIDDLEWARE_INITIALIZER = [thunk];

const STORE = createStore(
    ROOT_REDUCERS,
    INITIALSTATE,
    composeWithDevTools(applyMiddleware(...MIDDLEWARE_INITIALIZER))
 );


  export default STORE;