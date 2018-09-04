import { combineReducers } from 'redux'
import score from './score.js'
import currentQuestionId from './currentQuestionId.js'
import isFinished from './isFinished.js'
import currentStage from './currentStage.js'
import currentOptionId from './currentOptionId.js'

export default combineReducers({
    score,
    currentQuestionId,
    currentStage,
    currentOptionId,
    isFinished
})