import { useSelector } from 'react-redux'

const Results = () => {
  const { questions, answers } = useSelector((state) => state.quiz)
  
  // Calculate score
  const score = questions.reduce((total, question) => {
    const userAnswer = answers[question.id]
    return userAnswer === question.correctAnswer ? total + 1 : total
  }, 0)

  // Calculate total points
  const totalPoints = questions.reduce((total, question) => {
    const userAnswer = answers[question.id]
    return userAnswer === question.correctAnswer ? total + question.points : total
  }, 0)

  return (
    <div className="animate-fade-in text-center">
      {/* Score Summary - Exactly as per PDF requirements */}
      <div className="bg-green-50 rounded-xl p-8 border border-green-200 mb-6">
        <h2 className="text-2xl font-bold text-green-800 mb-3">Quiz Completed!</h2>
        <div className="text-5xl font-bold text-green-700 mb-2">
          {score}<span className="text-3xl text-green-600">/</span>{questions.length}
        </div>
        <p className="text-green-600 font-medium mb-3">correct answers</p>
        <div className="bg-green-100 rounded-lg py-2 px-4 inline-block">
          <span className="text-green-700 font-semibold">+{totalPoints} points earned</span>
        </div>
      </div>

      {/* Per-question feedback with chips - Exactly as per PDF */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Question Feedback</h3>
        
        {questions.map((question, index) => {
          const userAnswerIndex = answers[question.id]
          const isCorrect = userAnswerIndex === question.correctAnswer
          
          return (
            <div key={question.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <span className="text-gray-700">Q{index + 1}</span>
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                isCorrect 
                  ? 'bg-green-500 text-white' 
                  : 'bg-orange-500 text-white'
              }`}>
                {isCorrect ? 'Correct' : 'Incorrect'}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Results