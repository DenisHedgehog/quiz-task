import { connect } from 'react-redux'
import Quiz from '../components/quiz/Quiz.jsx'
import finishQuiz from '../actions/finishQuiz.js'

const mapStateToProps = (state) => ({
    currentQuestionId: state.currentQuestionId
})

const mapDispatchToProps = (dispatch) => ({
    finishQuiz: () => dispatch(finishQuiz())
})

const QuizContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Quiz)

export default QuizContainer