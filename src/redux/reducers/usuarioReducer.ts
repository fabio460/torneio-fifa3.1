import { usuarioType } from '@/Types';
import { createSlice } from '@reduxjs/toolkit'

export interface usuarioInterface {
    usuario: usuarioType | null
  }
const initialState:usuarioInterface = {
   usuario:null
}

const usuarioReducer = createSlice({
  name: "usuario",
  initialState,
  reducers: {
    getUsuario: (state, action)=>{
       state.usuario = action.payload
    }
  }
});

export const {
    getUsuario
} = usuarioReducer.actions

export default usuarioReducer.reducer