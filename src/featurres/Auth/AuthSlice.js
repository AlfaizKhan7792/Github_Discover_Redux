import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Login, Register } from "./AuthService";
import { toast } from "react-toastify";

const userExist = JSON.parse(localStorage.getItem("Auth"))

const AuthSlice = createSlice({
    name : "Auth",
    initialState : {
        Users : userExist || null,
        isLoading : false,
        isSuccess : false,
        isError : false,
        message : ""
    },
    reducers : {},
    extraReducers : (builder) =>{
        builder
        .addCase(RegsiterUser.pending , (state  ,action) =>{
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
            state.message = ""
        })
        .addCase(RegsiterUser.fulfilled , (state  ,action) =>{
            state.isLoading = false
            state.isSuccess = true
            state.Users = action.payload
            state.isError = false
            state.message = ""
        })
        .addCase(RegsiterUser.rejected , (state  ,action) =>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })

        .addCase(LoginUser.pending , (state  ,action) =>{
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
            state.message = ""
        })
        .addCase(LoginUser.fulfilled , (state  ,action) =>{
            state.isLoading = false
            state.isSuccess = true
            state.Users = action.payload
            state.isError = false
            state.message = ""
        })
        .addCase(LoginUser.rejected , (state  ,action) =>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })

        .addCase(LogoutUser.fulfilled , (state  ,action) =>{
            state.isLoading = false
            state.isSuccess = false
            state.Users = null
            state.isError = false
            state.message = ""
        })
    }
})


export default AuthSlice.reducer


// Register User Token
export const RegsiterUser = createAsyncThunk("AUTH/REGISTER" , async (FormData , thunkAPI) =>{
    try {
        return await Register(FormData)
    } catch (error) {
const message = error.response.data.message
toast.error(error)
return thunkAPI.rejectWithValue(message)
    }
})


// Login User Token
export const LoginUser = createAsyncThunk("AUTH/LOGIN", async (FormData , thunkAPI) =>{
    try {
        return await Login(FormData)
    } catch (error) {
        const message = error.response.data.message
        toast.error(error)
       return thunkAPI.rejectWithValue(message)
    }
})


// LogOUt User Token
export const LogoutUser = createAsyncThunk("AUTH/LOGOUT" , () =>{
    localStorage.removeItem("Auth")
})