import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CardapioItem } from '../../models/Items'

type CarrinhoState = {
  items: CardapioItem[]
  isOpen: boolean
}

const initialState: CarrinhoState = {
  items: [],
  isOpen: false
}

const carrrinhoSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CardapioItem>) => {
      const produto = state.items.find((item) => item.id === action.payload.id)

      if (produto) {
        const janela = window.confirm(
          'O prato já está no carrinho. Deseja adicionar mesmo assim?'
        )
        if (!janela) return
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
    }
  }
})

export const { add, open, close, remove } = carrrinhoSlice.actions
export default carrrinhoSlice.reducer
