import { configureStore } from "@reduxjs/toolkit"
import { quizReducer } from './quizSlice' // This will work now

const store = configureStore({
    reducer : {
        quiz : quizReducer
    }
})

export default store    