import React, { useMemo, useState } from  'react';
import Child from '../components/Child'

const UseMemo_Sample = () => {
  const [parentAge, setParentAge] = useState(0);
  const [childAge, setChildAge] = useState(0);

  const incrementP = () =>{
    setParentAge(parentAge +1)
  }
 
  const incrementC = () =>{
    setChildAge(childAge + 1)
  }

  console.log("부모컴포넌트 렌더링!");

  return (
    <div style={{border:'2px solid navy', padding:'10px'}}>
       <h1>부모</h1>
        <p>age : {parentAge}</p>
        <button onClick={incrementP}>부모나이증가</button>
        <button onClick={incrementC}>자녀나이증가</button>

        <Child name="홍길동" age={childAge} />
    </div>
  )
}

export default UseMemo_Sample