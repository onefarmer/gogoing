import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,combineReducers,applyMiddleware} from 'redux'
import TodoListReducer from './reducers/TodoListReducer'
import CountReducer from './reducers/CountRuducer'
import thunk from 'redux-thunk'

/*
（1）不拆分
const reducer = (state={list:[]},action={}) =>{
    switch(action.type){
        case 'ADD_TODO':
            // 深拷贝
            const newState = Object.assign({},state)
            newState.list.push(action.payload)
        default:
            return state
    }
}
*/

// 拆分（2）

//==>const reducer = combineReducers({
    // 数据拆分化
    //==>list:TodoListReducer,
    // 中间件（3)
    //==>count:CountReducer
//==>})

// -------------------------------------------------> （1）
//==>const store = createStore(reducer,{list:[]},applyMiddleware(thunk));

// const state = store.getState()
//==>function renderPage(){
    //<App store={store}/>
    //==>ReactDOM.render(<App store={store}/>, document.getElementById('root'));
    ReactDOM.render(<App/>, document.getElementById('root'));
//==>}
// 刷新
//==>renderPage()
// 订阅
//==>store.subscribe(renderPage)

//==>serviceWorker.unregister();
