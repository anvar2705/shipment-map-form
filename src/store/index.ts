import { combineReducers, configureStore } from '@reduxjs/toolkit'
import shipmentFormReducer from 'modules/shipment-form/store/slice'

const rootReducer = combineReducers({
  shipmentFormReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch
