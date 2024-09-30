
import { useState, useReducer } from "react";




const ACTION_TYPE = {
    deposit:"deposit",
    withdraw:"whthdraw",
}


const reducer = (state, action) => { 
    console.log("reducer", state, action);

    switch(action.type){
        case ACTION_TYPE.deposit:
            return state + action.payload;
        case ACTION_TYPE.withdraw:
            return state - action.payload;
        default:
            return state;
    }
    
};


// reducer
// dispatch
// action 
const Deposit = () => {

    const [number, setNumber]  = useState(0);
    const [money, dispatch]  = useReducer(reducer, 0);
 
    return (
    <div>
        <h2>useReducer 은행</h2>
        <p>잔고: {money}원</p>
        <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} step="1000" />
        <button onClick={() =>{
            dispatch( {type:ACTION_TYPE.deposit, payload:number} )
        }}
        >예금</button>
        <button  onClick={() =>{
            dispatch( {type:ACTION_TYPE.withdraw, payload:number} )
        }}>출금</button>
    </div>
    );
};


export default Deposit;
