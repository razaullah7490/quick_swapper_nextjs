import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deletAccount, logIn, logInWithGoogle } from '../services/authService';


export const loginThunk = createAsyncThunk("/user/login" , async(data) =>{
  console.log('thunk called')
  const response = await logIn(data)
  return response
  
})

export const loginWithGoogleThunk = createAsyncThunk("/user/google/login" , async(data) =>{
  const response = await logInWithGoogle(data)
  return response
})


export const deleteAccountThunk = createAsyncThunk("/user/deleteAcount" , async(data) =>{
  console.log('thunk called')
  const response = await deletAccount(data)
  return response
})




// const storedUserInfo = JSON.parse(localStorage.getItem("user"))
const storedUserInfo = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("user")) : {};



const initialState = {
    loading : false,
    user : {
        _id : storedUserInfo?._id ? storedUserInfo._id  : "",
        name : storedUserInfo?.name ? storedUserInfo.name  : "",
        token : storedUserInfo?.token ? storedUserInfo.token  : "",
    }
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    logout : (state , action) =>{
      localStorage.removeItem("user");
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state, action) => {
        state.loading=true;
        console.log("Pending:", action);
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        console.log({action})
        if(action.payload.Success){
          state.user._id = action.payload.body.user._id
          state.user.name = action.payload.body.user.fullName
          state.user.token = action.payload.body.token
          localStorage.setItem("user", JSON.stringify(state.user))
        }
       state.loading=false
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading=false
        console.log("Rejected:", action);
      })
      .addCase(deleteAccountThunk.pending, (state, action) => {
        state.loading=true;
        console.log("Pending:", action);
      })
      .addCase(deleteAccountThunk.fulfilled, (state, action) => {
       localStorage.removeItem("user")
      })
      .addCase(deleteAccountThunk.rejected, (state, action) => {
        state.loading=false
        console.log("Rejected:", action);
      })
      .addCase(loginWithGoogleThunk.pending, (state, action) => {
        state.loading=true;
        console.log("Pending:", action);
      })
      .addCase(loginWithGoogleThunk.fulfilled, (state, action) => {
        console.log({action})
        if(action.payload.Success){
          state.user._id = action.payload.body.user._id
          state.user.name = action.payload.body.user.fullName
          state.user.token = action.payload.body.token
          localStorage.setItem("user", JSON.stringify(state.user))
        }
       state.loading=false
      })
      .addCase(loginWithGoogleThunk.rejected, (state, action) => {
        state.loading=false
        console.log("Rejected:", action);
      });
  },
});

export const { increment, decrement } = authSlice.actions;
export default authSlice.reducer;
