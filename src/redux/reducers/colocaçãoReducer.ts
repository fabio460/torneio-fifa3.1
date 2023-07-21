import { participantesType } from '@/Types'
import { createSlice } from '@reduxjs/toolkit'

type subDadosType = {
    dados:participantesType,
    dadosDaApi:{
        idParticipante:string,
        premio:number
    },
    nome:string
}

type initialstateType={
    colocacao:{
        primeiro:subDadosType,
        segundo:subDadosType,
        terceiro:subDadosType,
        quarto:subDadosType
    } | null,
} 
const initialState:initialstateType = {
   colocacao:null
}

const colocaçãoReducer = createSlice({
  name: 'colocaçãoReducer',
  initialState,
  reducers: {
    setColocacao:(state, action)=>{
       state.colocacao = action.payload
    }
  }
});

export const {
    setColocacao
} = colocaçãoReducer.actions

export default colocaçãoReducer.reducer