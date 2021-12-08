// import {useState}  from 'react'
// import database from './firebare';

// function App() {
//   const [name, setName] = useState();
//   const [age, setAge] = useState();

//   const Push = () =>{
//     database.ref('user').set({
//       name:name,
//       age:age
//     })
//   }
//   return (
//     <div className="App">
//      <div className="row ">
       
//        <div className="col-md-6">
//          <div className="form-group">

//         <input type="text" className="form-control" placeholder="name" 
//         value={name}
//         onChange={(e)=>setName(e.target.value)}/>
//          </div>
//          <div className="form-group">
//         <input type="text" className="form-control" placeholder="age" 
//         value={age}
//         onChange={(e)=>setAge(e.target.value)}/>
//          </div>
//          {/* <input type="submit" onClick={Push}/> */}
//         <button onClick={Push}>Add</button>
//        </div>
      
//      </div>
//     </div>
//   );
// }

// export default App;
import React from 'react'
import Todo from './Todo'
import './App.css'

const App = () => {

return (
  <div className="App">
    <Todo />
  </div>
)
}
export default App