import DodoDispatcher from './DodoDispatcher'

const DodoActions = {
    addDodo:function(){
        DodoDispatcher.dispatch({
            actionType:'ADD_DODO',
            payload:data
        })
    }
}

export default DodoActions;