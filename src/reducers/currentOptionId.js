const currentOptionId = (state = null, action) => {
    switch(action.type) {
        case 'CHANGE_OPTION':
            return action.payload
        default: 
            return state
    }
}

export default currentOptionId