import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  {setQuestions} from './store/quizSlice'
import { questions } from './Data/questions'
import ProgressIndicator from './components/ProgressIndicator'
import QuestionCard from './components/QuestionCard'
import Controls from './components/Controls'
import Results from './components/Results'

function App() {
  const dispatch = useDispatch()
  const { isSubmitted } = useSelector((state) => state.quiz)

  useEffect(() => {
    dispatch(setQuestions(questions))
  }, [dispatch])

  return (
    <div className="min-h-screen bg-gray-50 py-4 px-3 sm:py-8 sm:px-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-sm sm:shadow-md overflow-hidden p-4 sm:p-6">
        <ProgressIndicator />
        
        {!isSubmitted ? (
          <>
            <QuestionCard />
            <Controls />
          </>
        ) : (
          <Results />
        )}
      </div>
    </div>
  )
}

export default App