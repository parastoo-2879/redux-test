import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


import store from './redux/store';
import { itemsAdded , itemsReduced,itemsRemoved } from './redux/action';
import customeStore from './redux/customeStore';
const unsubscribe = store.subscribe(()=>{
  console.log("store changed : " , store.getState() )
})
customeStore.subscribe(()=>{
  console.log("store changed!")
})
customeStore.dispatch(itemsAdded("ali"))
customeStore.dispatch(itemsAdded("ali"))
customeStore.dispatch(itemsAdded("pari"))
console.log("customerStore new state is :" ,customeStore.getState())
// function dispatchAndLog(store,action){
//   console.log("dispathching" , action)
//   store.dispatch(action)
//   console.log("next state " , store.getState())
// }

// dispatchAndLog(store,itemsAdded("tomato"))

// dispatchAndLog(store,itemsAdded("tomato"))
// dispatchAndLog(store,itemsAdded("tomato"))
// dispatchAndLog(store,itemsAdded("tomato"))
store.dispatch(itemsAdded("tomato"))
store.dispatch(itemsAdded("tomato"))
store.dispatch(itemsAdded("cucumber"))
store.dispatch(itemsAdded("potato"))
store.dispatch(itemsReduced('tomato'))
store.dispatch(itemsRemoved(2))

// customeStore.state = 1
customeStore.state = 1
console.log("customeStore is :",customeStore)
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
