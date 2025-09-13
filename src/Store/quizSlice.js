import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [],
  currentQuestionIndex: 0,
  answers: {},
  isSubmitted: false,
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
    selectAnswer: (state, action) => {
      const { questionId, answerIndex } = action.payload;
      state.answers[questionId] = answerIndex;
    },
    nextQuestion: (state) => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      }
    },
    prevQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
      }
    },
    submitQuiz: (state) => {
      state.isSubmitted = true;
    },
  },
});

export const { setQuestions, selectAnswer, nextQuestion, prevQuestion, submitQuiz } = quizSlice.actions;
export default quizSlice.reducer;