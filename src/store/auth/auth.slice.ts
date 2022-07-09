import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TokenTypes } from '../../interfaces/token'
import { AuthTypes } from './auth.interface'
import tokenService from '../../services/token/tokenService'

const initialState: AuthTypes = {
  token: tokenService.getAccessToken(),
  authUser: null,
}

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveToken: (state, action: PayloadAction<TokenTypes>) => {
      state.token = action.payload.access
      tokenService.saveToken({ token: action.payload })
    },
  },
})

export const { saveToken } = AuthSlice.actions

export default AuthSlice
