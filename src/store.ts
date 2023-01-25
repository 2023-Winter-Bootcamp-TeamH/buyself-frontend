import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BuyCardProps } from './components/scan/BuyList'
import { ChecklistProps } from './components/scan/ChecklistBox'

interface stateProps {
  products: BuyCardProps[]
  checklists: ChecklistProps[]
  productTotal: number
  checklistTotal: number
  checklistCount: number
}
const initialState: stateProps = {
  products: [],
  checklists: [],
  productTotal: 0,
  checklistTotal: 0,
  checklistCount: 0,
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
    addChecklist: (state, action: PayloadAction<ChecklistProps>) => {
      const Item = state.checklists.findIndex(
        (item) => item.id === action.payload.id
      )
      if (Item === -1) {
        state.checklists.push({ ...action.payload })
      } else {
        state.checklists[Item].count++
      }
      return state
    },
    deleteChecklist: (state, action) => {
      const index = state.checklists.findIndex(
        (item) => item.id === action.payload
      )
      state.checklists.splice(index, 1)
    },
    increaseChecklist: (state, action) => {
      const index = state.checklists.findIndex(
        (item) => item.id === action.payload
      )
      state.checklists[index].count++
    },
    decreaseChecklist: (state, action) => {
      const index = state.checklists.findIndex(
        (item) => item.id === action.payload
      )
      if (state.checklists[index].count > 1) {
        state.checklists[index].count--
      }
    },
    totalCheckPrice: (state, action) => {
      state.checklistTotal = action.payload
    },
    totalCheckCount: (state, action) => {
      state.checklistCount = action.payload
    },
    toggleChecklist: (state, action) => {
      const index = state.checklists.findIndex(
        (item) => item.id === action.payload
      )
      if (index !== -1) {
        state.checklists[index].checked = true
      }
      return state
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
  addChecklist,
  deleteChecklist,
  increaseChecklist,
  decreaseChecklist,
  totalCheckPrice,
  totalCheckCount,
  toggleChecklist,
} = buyList.actions

export type RootState = ReturnType<typeof store.getState>
export { store, buyList }
