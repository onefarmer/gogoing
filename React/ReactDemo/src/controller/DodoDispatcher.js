import {Dispatcher} from 'flux';
import Store from './store'

const DodoDispatcher = new Dispatcher();

DodoDispatcher.regeist(function(action){
    switch(action.actionType){
        case 'ADD_DODO':
        //
            store.addDodoData(action.payload);
            store.emitChange();
        default:
    }
})

export default DodoDispatcher;