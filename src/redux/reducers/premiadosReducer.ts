import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   premiados:[]
}

const premiadosReducer = createSlice({
  name: "premiadosReducer",
  initialState,
  reducers: {
     setPremiados:(state, action)=>{
        state.premiados = action.payload
     }
  }
});

export const {
    setPremiados
} = premiadosReducer.actions

export default premiadosReducer.reducer