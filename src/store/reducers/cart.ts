import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MenuItem } from '../../models/Items'

type CartState = {
  items: MenuItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<MenuItem>) => {
      const product = state.items.find((item) => item.id === action.payload.id)

      if (product) {
        const confirmationWindow = window.confirm(
          'O prato já está no carrinho. Deseja adicionar mesmo assim?'
        )
        if (!confirmationWindow) return
      }

      state.items.push(action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items.splice(action.payload, 1)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { add, open, close, remove, clear } = cartSlice.actions
export default cartSlice.reducer
