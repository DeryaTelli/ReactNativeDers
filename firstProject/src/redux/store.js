import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import { thunk } from 'redux-thunk';
export const store = configureStore({
    reducer: {
        user:userReducer
    },

    //thunk hatasini cozumu bu sekilde kullailiyor 
    //npm i redux-thunk 
    //indirdikten sonra bu dosyaya thunk import edip asagidaki kodu yaziyoruz 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck:false}),
});