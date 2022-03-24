import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IColumn {
  id: number
  title: string
  description: string
  userId: string
}

const initialColumnSlice = {
  columns: [] as IColumn[],
  openInput: false,
  loading: false,
  error: false
}

export const columnSlice = createSlice({
  name: 'columns',
  initialState: initialColumnSlice,
  reducers: {
    openColumnInput:(state)=>{
      state.openInput = !state.openInput
    }
  }
})

export const {
 openColumnInput,
} = columnSlice.actions

export const columnReducer = columnSlice.reducer
