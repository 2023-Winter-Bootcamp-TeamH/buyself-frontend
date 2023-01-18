import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BuyCardProps } from './components/scan/BuyList'

interface stateProps {
  products: BuyCardProps[]
  productTotal: number
}
const initialState: stateProps = {
  products: [],
  productTotal: 0,
}

const buyList = createSlice({
  name: 'buyList',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<BuyCardProps>) => {
      const checkItem = state.products.findIndex(
        (item) => item.id === action.payload.id
      )
      if (checkItem === -1) {
        state.products.push({ ...action.payload })
      } else {
        state.products[checkItem].count++
      }
      return state
    },
    deleteProduct: (state, action) => {
      const index = state.products.findIndex(
        (item) => item.id === action.payload
      )
      state.products.splice(index, 1)
    },
    increaseProduct: (state, action) => {
      const index = state.products.findIndex(
        (item) => item.id === action.payload
      )
      state.products[index].count++
    },
    decreaseProduct: (state, action) => {
      const index = state.products.findIndex(
        (item) => item.id === action.payload
      )
      if (state.products[index].count > 1) {
        state.products[index].count--
      }
    },
    totalPrice: (state, action) => {
      state.productTotal = action.payload
    },
  },
})

const store = configureStore({
  reducer: {
    buyList: buyList.reducer,
  },
})

export const {
  addProduct,
  deleteProduct,
  increaseProduct,
  decreaseProduct,
  totalPrice,
} = buyList.actions
export type RootState = ReturnType<typeof store.getState>
export { store, buyList }