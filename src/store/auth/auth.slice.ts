import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  token: null,
  authUser: null,
}

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
})

export const {} = AuthSlice.actions

export default AuthSlice
