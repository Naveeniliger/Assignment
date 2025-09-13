import { useSelector } from 'react-redux'

const ProgressIndicator = () => {
  const { questions, currentQuestionIndex, answers } = useSelector((state) => state.quiz)
  const answeredCount = Object.keys(answers).length

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
        <span>Progress</span>
        <span>{answeredCount}/{questions.length} answered</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${(answeredCount / questions.length) * 100}%` }}
        />
      </div>
    </div>
  )
}

export default ProgressIndicator