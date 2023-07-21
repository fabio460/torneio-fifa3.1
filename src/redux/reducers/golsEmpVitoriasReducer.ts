import { createSlice } from '@reduxjs/toolkit'

type dadosType = {
    idParticipante:string, 
    premio:number,
    dado?:number,
    tipoDeDado?:string,
    participante?:string,
    dadosDaApi:{
      idParticipante:string,
      premio:number,
    }
  }

type initialStateType = {
    golsEmpVitorias:{
        empates:dadosType[],
        gols:dadosType[],
        vitorias:dadosType[]
    } | null
}

const initialState:initialStateType = {
   golsEmpVitorias:null
}

const golsEmpVitoriasReducer = createSlice({
  name: "golsEmpVitoriasReducer",
  initialState,
  reducers: {
    setGolsEmpVitorias:(state, action)=>{
       state.golsEmpVitorias = action.payload
    }
  }
});

export const {
    setGolsEmpVitorias
} = golsEmpVitoriasReducer.actions

export default golsEmpVitoriasReducer.reducer