const actions = {
    // action类似于mutation，但是与之不同的是
    // 异步操作需要通过在action，通过context上下文执行异步操作后commit一个突变事件来实现
    // Action 提交的是 mutation，而不是直接变更状态。
    // Action 可以包含任意异步操作。
    // 而action的触发要通过dispatch来触发
    testAction(context){
        context.commit('changeLogin')
    }
}

export default actions