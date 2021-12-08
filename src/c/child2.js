import React, { memo } from 'react'
const Child2 = () => {
    console.log("Child 2");
return (
  <div style={{textAlign:'center'}}>
    <h1>Child 2</h1>
  </div>
)
}
export default memo(Child2)