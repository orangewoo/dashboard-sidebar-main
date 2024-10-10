import React, { useRef } from 'react'
import MyInput from '../components/MyInput'

const ForwardRef = () => {

    const inputRef = useRef();

    const focus = () =>{
        inputRef.current.focus();
    }

  return (
    <div>
        <h2>ForwardRef</h2>
        {/* <input ref={inputRef} /> */}
        <MyInput  ref={inputRef} />        
        <button onClick={focus}>focus</button>        
    </div>
  )
}

export default ForwardRef