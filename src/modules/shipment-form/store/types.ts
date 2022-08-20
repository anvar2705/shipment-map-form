import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { IShipment } from '../pages/ShipmentForm/ShipmentForm.types'

export type TReducer<P = any> = CaseReducer<IShipmentFormState, PayloadAction<P>>

export interface IShipmentFormState {
  selected: IShipment | null
}
