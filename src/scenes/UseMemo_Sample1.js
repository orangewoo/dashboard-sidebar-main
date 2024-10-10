import React, { useMemo, useState } from  'react';
import Child1 from '../components/Child1'

const UseMemo_Sample1 = () => {
  const [parentAge, setParentAge] = useState(0);
  
  const incrementP = () =>{
    setParentAge(parentAge +1)
  }

  const name = useMemo(() => {
    return {
        fname:"길동",
        lname:"홍"
      };
    }, []);
  

  console.log("부모컴포넌트 렌더링!");

  return (
    <div style={{border:'2px solid navy', padding:'10px'}}>
       <h1>부모</h1>
        <p>age : {parentAge}</p>
        <button onClick={incrementP}>부모나이증가</button>
        
        <Child1 name={name}  />
    </div>
  )
}

export default UseMemo_Sample1 ;