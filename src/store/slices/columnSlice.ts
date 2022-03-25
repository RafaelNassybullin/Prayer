import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IColumn {
  id: number
  title: string
  description: string
  userId: string
}

const initialColumnSlice = {
  columns: [],
  openInput: false,
  loading: false,
  error: false
}

export const columnSlice = createSlice({
  name: 'columns',
  initialState: initialColumnSlice,
  reducers: {
    openColumnInput: (state) => {
      state.openInput = !state.openInput
    },
    getColumnsRequire: (state) => {
      state.loading = true
    },
    getColumnsSuccess: (state, action: PayloadAction<any>) => {
      state.columns = action.payload
      state.loading = false
    },
    getColumnsFailed: (state) => {
      state.loading = false
      state.error = true
    },
    clearColumns: (state)=>{
      state.columns = []
    },
    deleteColumns: (state) => {

    },
  }
})

export const {
  openColumnInput,
  getColumnsRequire,
  getColumnsSuccess,
  getColumnsFailed,
  clearColumns
} = columnSlice.actions

export const columnReducer = columnSlice.reducer
