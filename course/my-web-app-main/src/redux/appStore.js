import { configureStore } from '@reduxjs/toolkit'
import { appReducer } from './appReducer';
import { sagaReducer } from './sagaReducer';
import logger from 'redux-logger';

export const appStore = configureStore({
    reducer: {
        appReducer,
        sagaReducer
    },
    middleware: () => {
        return [logger]
    }
});