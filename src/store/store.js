import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import userSlice from './features/userSlice';
import taskSlice from './features/tasksSlice';


const persistConfig = {
    key: 'root',
    storage,
}

const reducers = combineReducers({
    tasks: taskSlice,
    user: userSlice,
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export const persistor = persistStore(store)
