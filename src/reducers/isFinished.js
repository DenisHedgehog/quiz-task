const isFinished = (state = false, action) => {
    switch(action.type) {
        case 'FINISH_QUIZ':
            return !state
        default: 
            return state
    }
}

export default isFinished