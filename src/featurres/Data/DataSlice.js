import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchGithub, fetchGithubUserData, fetchGithubUsersRepos } from "./DataService";

const DataSlice = createSlice({
    name : "Search",
    initialState : {
        All_Users : [],
        User_Card : {},
        Repository_Data : [],
        isLoading : false,
        isSuccess : false,
        isError : false,
        message : ""
    },
    reducers : {},
    extraReducers : (builder) =>{
        builder
        .addCase(GithubUsers.pending , (state , action) =>{
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
            state.message = ""
        })
        .addCase(GithubUsers.fulfilled , (state , action) =>{
            state.isLoading = false
            state.isSuccess = true
            state.All_Users = action.payload
            state.isError = false
            state.message = ""
        })
        .addCase(GithubUsers.rejected , (state , action) =>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })

        .addCase(GithubUsersData.pending , (state , action) =>{
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
            state.message = ""
        })
        .addCase(GithubUsersData.fulfilled , (state , action) =>{
            state.isLoading = false
            state.isSuccess = true
            state.User_Card = action.payload
            state.isError = false
            state.message = ""
        })
        .addCase(GithubUsersData.rejected , (state , action) =>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })

        .addCase(GithubUserRepos.pending , (state , action) =>{
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
            state.message = ""
        })
        .addCase(GithubUserRepos.fulfilled , (state , action) =>{
            state.isLoading = false
            state.isSuccess = true
            state.Repository_Data = action.payload
            state.isError = false
            state.message = ""
        })
        .addCase(GithubUserRepos.rejected , (state , action) =>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })
    }
})


export default DataSlice.reducer


// Fetch Github Users Thunk
export const GithubUsers = createAsyncThunk("GITHUB/USERS" , async (username , thunkAPI) =>{
try {
    return await fetchGithub(username)
} catch (error) {
    const message = error.response.data.message
    return thunkAPI.rejectWithValue(message)
}
})


// Fetch Github Users Data Thunk
export const GithubUsersData = createAsyncThunk("GITHUB/DATA" , async (username , thunkAPI) =>{
    try {
        return await fetchGithubUserData(username)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

// Fetch Github Users Repository Data Thunk
export const GithubUserRepos = createAsyncThunk("GITHUB/DATA/REPOS" , async (username , thunkAPI) =>{
    try {
        return await fetchGithubUsersRepos(username)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})