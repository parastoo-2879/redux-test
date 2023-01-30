import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


import store from './redux/store';
import { itemsAdded , itemsReduced,itemsRemoved } from './redux/action';

const unsubscribe = store.subscribe(()=>{
  console.log("store changed : " , store.getState() )
})

store.dispatch(("tomato"))
store.dispatch(itemsAdded("tomato"))
store.dispatch(itemsAdded("tomato"))
store.dispatch(itemsAdded("cucumber"))
store.dispatch(itemsAdded("potato"))
store.dispatch(itemsReduced('tomato'))
store.dispatch(itemsRemoved("potato"))



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
