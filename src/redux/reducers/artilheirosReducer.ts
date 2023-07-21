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
  artilheiros:{
    primeiro:dados[],
    segundo:dados[],
    terceiro:dados[],
    quarto:dados[],
  } | null
}

const initialState:initialStateType = {
   artilheiros:null
}

const artilheirosReducer = createSlice({
  name: 'artilheirosReducer',
  initialState,
  reducers: {
    setArtilheiros: (state, action)=>{
        state.artilheiros = action.payload
    }
  }
});

export const {
    setArtilheiros
} = artilheirosReducer.actions

export default artilheirosReducer.reducer