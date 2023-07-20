import { configureStore } from '@reduxjs/toolkit'
import usuarioReducer from './reducers/usuarioReducer'
import torneioSelecionadoReducer from './reducers/torneioSelecionadoReducer'
import participantesCheckedReducer from './reducers/participantesCheckedReducer'
export const store = configureStore({
  reducer: {
    participantesCheckedReducer,
    torneioSelecionadoReducer,
    usuarioReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch