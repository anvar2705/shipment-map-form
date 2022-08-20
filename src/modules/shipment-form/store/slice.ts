import { createSlice } from '@reduxjs/toolkit'
import initialState from './defaults'
import reducers from './reducers'

const shipmentFormSlice = createSlice({
  name: 'shipmentForm',
  initialState,
  reducers: { ...reducers },
})

export const { reset, setShipment } = shipmentFormSlice.actions
export default shipmentFormSlice.reducer
