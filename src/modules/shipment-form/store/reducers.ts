import { TReducer } from './types'
import initialState from './defaults'
import { IShipment } from '../pages/ShipmentForm/ShipmentForm.types'

const reset: TReducer = () => initialState
const setShipment: TReducer<IShipment> = (state, action) => {
  state.selected = action.payload
}

const reducers = {
  reset,
  setShipment,
}

export default reducers
