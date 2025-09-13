import { useDispatch, useSelector } from 'react-redux'
import { nextQuestion, prevQuestion, submitQuiz } from '../store/quizSlice'
import { useState } from 'react'

const Controls = () => {
  const dispatch = useDispatch()
  const { questions, currentQuestionIndex, answers } = useSelector((state) => state.quiz)
  const [shouldShake, setShouldShake] = useState(false)
  
  const isFirstQuestion = currentQuestionIndex === 0
  const isLastQuestion = currentQuestionIndex === questions.length - 1
  const allAnswered = Object.keys(answers).length === questions.length

  const handleNext = () => {
    if (isLastQuestion && allAnswered) {
      dispatch(submitQuiz())
    } else if (!answers[questions[currentQuestionIndex].id]) {
      setShouldShake(true)
      setTimeout(() => setShouldShake(false), 300)
    } else {
      dispatch(nextQuestion())
    }
  }

  const handleSubmit = () => {
    if (allAnswered) {
      dispatch(submitQuiz())
    } else {
      setShouldShake(true)
      setTimeout(() => setShouldShake(false), 300)
    }
  }

  return (
    <div className="flex justify-between gap-3 pt-4 border-t border-gray-200">
      <button
        onClick={() => dispatch(prevQuestion())}
        disabled={isFirstQuestion}
        className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Previous
      </button>

      {isLastQuestion ? (
        <button
          onClick={handleSubmit}
          className={`px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors ${shouldShake ? 'animate-shake' : ''} ${!allAnswered ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600'}`}
          disabled={!allAnswered}
        >
          Submit
        </button>
      ) : (
        <button
          onClick={handleNext}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Next
        </button>
      )}
    </div>
  )
}

export default Controls