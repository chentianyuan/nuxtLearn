const mutations = {
    increment(state){
        state.counter++
    },
    changeLogin(state){
        state.login = !state.login
    }
}

export default mutations