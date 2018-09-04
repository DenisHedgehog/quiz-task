import answerStage from '../constants/answerStage.js';

const currentStage = (state = answerStage.ANSWER, action) => {
    switch(action.type) {
        case 'CHANGE_STAGE':
            return action.payload
        default: 
            return state
    }
}

export default currentStage