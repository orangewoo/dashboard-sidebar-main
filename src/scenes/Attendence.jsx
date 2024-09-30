import React from 'react'
import { useState, useReducer } from "react";
import { Student } from './Student';



const ACTION_TYPE = {
    add:"add",
    del:"del",
    mark:"mark",
}

const initialState = {
    count:0,
    students:[]
};

const reducer = (state, action) => { 
    console.log("reducer", state, action);

    switch(action.type){
        case ACTION_TYPE.add:
            const nm = action.payload.name;
            const newStudent ={
                id:Date.now(),
                name:nm,
                isHere:false,
            }
            return {
                count: state.count +1,
                students:[...state.students, newStudent],
            };
        case ACTION_TYPE.del:
            return {
                count:state.count - 1,
                students: state.students.filter( student => student.id !== action.payload.id),
            }
        case ACTION_TYPE.mark:
            return { 
                count:state.count ,
                students: state.students.map( student => {
                    if(student.id === action.payload.id){
                        return {...student, isHere: !student.isHere}
                    }
                    return student;                    
                }),
            }  
        default:
            return state;
    }
    
};


const Attendence = () => {

 const [name, setName]  = useState('');
 const [studentsInfo, dispatch]  = useReducer(reducer, initialState);

  return (
    <div>
        <h2>Attendence</h2>
        <p>총학생수: {studentsInfo.count} 명 </p>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={() =>{
            dispatch( {type:ACTION_TYPE.add, payload:{name}} )
        }}
        >추가</button>        
        {
        studentsInfo.students.map(student => {
            return ( <Student key={student.id} name={student.name} dispatch={dispatch} 
                id={student.id} isHere={student.isHere} /> )                       
        })
        }
    </div>
  )
};




export default Attendence;
