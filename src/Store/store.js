import { configureStore } from "@reduxjs/toolkit";
import { quizReducer } from '../store/quizSlice'

const store = configureStore({
    reducer : {
        quiz : quizReducer
    }
})

export default store    