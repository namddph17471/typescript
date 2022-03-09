import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';

// const name = "Truong huyen";
// const age = 19999;
// const status = true;
// const person = {
//   name:"Vô thủy",
//   age:1999
// }
// const show = (props)=>{
// return <p>Một Lần thấy {props.name} ai biết đạo thành không</p>
// }
// // component
// const Show=(props)=>{
// return <p>Một Lần thấy {props.name} ai biết đạo thành không</p>
// }
ReactDOM.render(
  <div>
    {/* <h1>{name}</h1>
    <p>{age}</p>
    <p>{status ? "Hế lô":"lô hề"}</p>
    {show({name : "Vô Thủy"})}
    <Show name="Vô thủy" /> */}
    <App />
    </div>
,document.querySelector("#root"))