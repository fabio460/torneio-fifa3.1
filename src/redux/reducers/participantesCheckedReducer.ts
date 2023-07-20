import { checkedTypes } from '@/Types';
import { createSlice } from '@reduxjs/toolkit'

type initialTypes={
    paticipantesChecked:checkedTypes[]
}

const initialState:initialTypes = {
   paticipantesChecked:[]
}

const participantesCheckedReducer = createSlice({
  name: "participantesCheckedReducer",
  initialState,
  reducers: {
    setParticipantesChecked:(state, action)=>{
        state.paticipantesChecked = action.payload
    }
  }
});

export const {
    setParticipantesChecked
} = participantesCheckedReducer.actions

export default participantesCheckedReducer.reducer