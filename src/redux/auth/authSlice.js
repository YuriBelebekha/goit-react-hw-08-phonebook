import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  login,
  logout,
  refreshUser,
} from './authOperations';

const authInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,  
  extraReducers: (builder) => {    
    builder
      // register
      .addCase(register.pending, (state, _) => state)
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;        
        state.token = payload.token;        
        state.isLoggedIn = true;  
      })
      .addCase(register.rejected, (state, _) => state)
      
      // login
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;        
        state.token = payload.token;        
        state.isLoggedIn = true;
      })
      
      // logout
      .addCase(logout.fulfilled, (state, _) => {        
        state.user = { name: null, email: null };       
        state.token = null;        
        state.isLoggedIn = false;
      })

      // refreshUser
      .addCase(refreshUser.pending, (state, _) => {        
        state.isRefreshing = true;        
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {        
        state.user = payload;  
        state.isLoggedIn = true;  
        state.isRefreshing = false;  
      })
      .addCase(refreshUser.rejected, (state, _) => {        
        state.isRefreshing = false;        
      })
  },
});

export const authReducer = authSlice.reducer;