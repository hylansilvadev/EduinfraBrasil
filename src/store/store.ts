import { configureStore, Action, ThunkAction } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import { dataApi } from "../service/api";
import {dataSlice} from "./reducers/dataReducer"

export  const store = configureStore({
    reducer:{
        [dataApi.reducerPath]: dataApi.reducer,
        apiData: dataSlice.reducer
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataApi.middleware),
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;