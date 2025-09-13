import { useSelector } from 'react-redux'
import Option from './Option'

const QuestionCard = () => {
  const { questions, currentQuestionIndex } = useSelector((state) => state.quiz)
  const currentQuestion = questions[currentQuestionIndex]

  if (!currentQuestion) return null

  return (
    <div className="mb-6">
      <h2 className="text-lg font-medium text-gray-800 mb-1">Question {currentQuestionIndex + 1}</h2>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{currentQuestion.question}</h3>
      
      <div className="space-y-3">
        {currentQuestion.options.map((option, index) => (
          <Option 
            key={index} 
            option={option} 
            index={index} 
            questionId={currentQuestion.id} 
          />
        ))}
      </div>
    </div>
  )
}

export default QuestionCard