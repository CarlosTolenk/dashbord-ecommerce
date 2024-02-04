import thunk from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit';
import reducer from './reducer';


const store = configureStore({
    reducer: reducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: thunk
            }
        })
});

export default store;
