import { configureStore } from '@reduxjs/toolkit'

import api from '../services/api'

import carrrinhoReducer from './reducers/carrinho'

export const store = configureStore({
  reducer: {
    carrinho: carrrinhoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
