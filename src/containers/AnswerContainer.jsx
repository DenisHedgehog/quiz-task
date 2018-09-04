import { connect } from 'react-redux'
import Answer from '../components/quiz/answer/Answer.jsx'
import changeStage from '../actions/changeStage.js'
import increaseScore from '../actions/increaseScore.js'
import nextQuestion from '../actions/nextQuestion.js'
import changeCurrentOptionId from '../actions/changeCurrentOptionId.js'

const mapStateToProps = (state) => ({
    score: state.score,
    currentQuestionId: state.currentQuestionId,
    currentStage: state.currentStage,
    currentOptionId: state.currentOptionId,
    isFinished: state.isFinished
})

const mapDispatchToProps = (dispatch) => ({
    changeCurrentOptionId: (id) => dispatch(changeCurrentOptionId(id)),
    changeStage: (stage) => dispatch(changeStage(stage)),
    increaseScore: () => dispatch(increaseScore()),
    nextQuestion: () => dispatch(nextQuestion())
})

const AnswerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Answer)

export default AnswerContainer