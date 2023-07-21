import { jogadoresType, participantesType } from '@/Types'
import { createSlice } from '@reduxjs/toolkit'

type dados={
  dadosDaApi:{
    idParticipante:string,
    premio:number
  },
  jogador:jogadoresType,
  participante:{
    checked:boolean,
    participante:participantesType
  }
}

type initialStateType={
    assistente:{
        primeiro:dados[],
        segundo:dados[],
        terceiro:dados[],
        quarto:dados[],
  } | null
}

const initialState:initialStateType = {
   assistente:null
}

const assistentesReducer = createSlice({
  name: 'assistentesReducer',
  initialState,
  reducers: {
    setAssistente: (state, action)=>{
        state.assistente = action.payload
    }
  }
});

export const {
    setAssistente
} = assistentesReducer.actions

export default assistentesReducer.reducer