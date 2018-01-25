import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'

const createStore = () => {
    return new Vuex.Store({
        state:{
            counter: 0,
            login: false
        },
        mutations,
        actions
    })
}

export default createStore