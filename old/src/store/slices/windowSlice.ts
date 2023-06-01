import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface IWindowSlice {
  width: number | null
  height: number | null
  isMobileMode: boolean
}

const initialState: IWindowSlice = {
  width: null,
  height: null,
  isMobileMode: false,
}

export const windowSlice = createSlice({
  name: 'window',
  initialState,
  reducers: {
    updateWindowSize: (
      state,
      action: PayloadAction<{ height: number, width: number }>
    ) => {
      state.height = action.payload.height
      state.width = action.payload.width
    },
    updateIsMobileMode: (state, action: PayloadAction<boolean>) => {
      state.isMobileMode = action.payload
    }
  }
})

export const {
  updateWindowSize,
  updateIsMobileMode,
} = windowSlice.actions

export const windowReducer = windowSlice.reducer