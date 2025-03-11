import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Auth/AuthSlice"
import SearchReducer from "./Data/DataSlice"

const store = configureStore({
    reducer : {
Auth : AuthReducer,
Search : SearchReducer,
    }
})

export default store