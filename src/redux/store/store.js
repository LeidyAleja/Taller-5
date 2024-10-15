import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../slice/posts/reducers"
import commentsReducer from "../../slices/commentsSlice"
import usersReducer from "../slice/users/reducers"

export const store = configureStore({
    reducer: {
        post: postsReducer,
        comments: commentsReducer,
        users: usersReducer, 
    }
})

export default store;