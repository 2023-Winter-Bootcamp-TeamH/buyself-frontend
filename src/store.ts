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
      state.products.push({ ...action.payload })
      return state
    },
  },
})

const store = configureStore({
  reducer: {
    buyList: buyList.reducer,
  },
})

export const { addProduct } = buyList.actions
export type RootState = ReturnType<typeof store.getState>
export { store, buyList }
