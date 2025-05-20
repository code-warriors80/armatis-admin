import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of the auth state
interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

// Initial state
const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

// Create the auth slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
    setUser(state, action: PayloadAction<User | null>) {
      state.user = action.payload;
    },
  },
});

// Export actions and reducer
export const { login, logout, setUser } = authSlice.actions;
export default authSlice.reducer;
