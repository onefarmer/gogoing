const TodoListReducer = (state=[],action={}) =>{
    switch(action.type){
        case 'ADD_TODO':
            // 深拷贝
            /*
            const newState = Object.assign({},state)
            newState.list.push(action.payload)
            */
           const newState = [...state];
           newState.push(action.payload)
           return newState;
        default:
            return state
    }
}

export default TodoListReducer;