import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    idTorneioSelecionado:localStorage.getItem("idTorneioSelecionado")
}

const torneioSelecionadoReducer = createSlice({
  name: "torneioSelecionadoReducer",
  initialState,
  reducers: {
    setIdTorneio:(state, action)=>{
       state.idTorneioSelecionado = action.payload
    }
  }
});

export const {
    setIdTorneio
} = torneioSelecionadoReducer.actions

export default torneioSelecionadoReducer.reducer