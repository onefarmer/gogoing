const CountReducer = (state=0,action={}) =>{
    switch(action.type){
        case 'ADD_ONE':
           return state + action.payload;
        default:
            return state
    }
}

export default CountReducer;