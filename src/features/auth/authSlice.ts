import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export type UserRole = "ADMIN" | "VIEWER"

interface AuthState {
isAuthenticated: boolean
role: UserRole | null
accessToken: string | null
}

const initialState: AuthState = {
isAuthenticated: false,
role: null,
accessToken: null,
}

const authSlice = createSlice({
name: "auth",
initialState,
reducers: {
loginSuccess(
      state,
      action: PayloadAction<{ role: UserRole; token: string }>
    ) {
      state.isAuthenticated = true
      state.role = action.payload.role
      state.accessToken = action.payload.token
    },
    logout(state) {
      state.isAuthenticated = false
      state.role = null
      state.accessToken = null
    },
  },
})

export const { loginSuccess, logout } = authSlice.actions
export default authSlice.reducer
