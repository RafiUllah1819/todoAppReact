import React, { memo } from 'react'
const Child1 = ({count}) => {
    console.log("Child 1");
return (
  <div style={{textAlign:'center'}}>
    <h1>Child 1</h1>
    {count}
  </div>
)
}
export default memo(Child1)