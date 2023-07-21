import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  btnDeleteVisible:false
}

const btnVisibleDeleteParticipantesReducer = createSlice({
  name: 'btnVisibleDeleteParticipantesReducer',
  initialState,
  reducers: {
    handleVisibleBtn:(state, action)=>{
        state.btnDeleteVisible = action.payload
    }
  }
});

export const {
    handleVisibleBtn
} = btnVisibleDeleteParticipantesReducer.actions

export default btnVisibleDeleteParticipantesReducer.reducer