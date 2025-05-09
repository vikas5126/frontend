import {configureStore} from '@reduxjs/toolkit';
import { userAPI } from './api/userAPI';
import { userReducer } from './reducer/userReducer';
import { productAPI } from './api/productAPI';
import { cartReducer } from './reducer/cartReducer';
import { orderAPI } from './api/orderAPI';
import { dashboardApi } from './api/dashboardAPI';
export const server = import.meta.env.VITE_SERVER;

export const store = configureStore({
    reducer:{
        [userAPI.reducerPath]: userAPI.reducer,
        [userReducer.name]: userReducer.reducer,
        [productAPI.reducerPath]: productAPI.reducer,
        [cartReducer.name]: cartReducer.reducer,
        [orderAPI.reducerPath]: orderAPI.reducer,
        [dashboardApi.reducerPath]: dashboardApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userAPI.middleware, productAPI.middleware, orderAPI.middleware, dashboardApi.middleware),
    devTools: true,
});