import StoreApp from './App';
import {createStore,combineReducers} from 'redux';

const reducer = (state={list:[]},action={}) =>{
    switch(action.type){
        case 'ADD_DODO':
            const newState = Object.assign({},state);
            newState.list.push(action.payload);
            return
        default:
            return state;
    }
}
const store = createStore(reducer,{list:[]})

const state = store.getState();

function renderPage(){
    ReactDOM.render(<StoreApp store={store}/>, document.getElementById('root'));
}
renderPage();

store.subscribe(renderPage)
