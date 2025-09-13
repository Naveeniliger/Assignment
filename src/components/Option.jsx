import { useDispatch, useSelector } from 'react-redux'
import { selectAnswer } from '../store/quizSlice'

const Option = ({ option, index, questionId }) => {
  const dispatch = useDispatch()
  const { answers } = useSelector((state) => state.quiz)
  const selectedAnswer = answers[questionId]
  const isSelected = selectedAnswer === index

  const handleSelect = () => {
    dispatch(selectAnswer({ questionId, answerIndex: index }))
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleSelect()
    }
  }

  return (
    <button
      onClick={handleSelect}
      onKeyPress={handleKeyPress}
      aria-pressed={isSelected}
      aria-label={`Option: ${option}. ${isSelected ? 'Selected' : 'Not selected'}`}
      tabIndex={0}
      className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-150 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 min-h-[44px] flex items-center
        ${isSelected 
          ? 'bg-blue-500 border-blue-500 text-white shadow-md scale-105' 
          : 'bg-white border-gray-200 text-gray-800 hover:border-blue-300'
        }`}
    >
      {option}
    </button>
  )
}

export default Option