let methods = {
    add(state,action) {
        state.num++
        return state
    },
    addNum(state,action) {
        state.num = state.num + action.num
        return state
    },
}

export default methods