import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import window from 'global';


export default function configureStore(initialState={state : "hello"}) {
    return createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);
}