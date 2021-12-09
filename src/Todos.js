import React , {useState} from 'react';
import { toast } from 'react-toastify';

const Todos = () => {

    const [index, setIndex] = useState(null)
    const [list, setList] = useState([])
    const [state, setState] = useState({
        name: '',
        password: ''
    })

    const addRecord = () =>{
        if(state.name.length>0 && state.password.length>0){
            const copy = [...list]
            const obj = {name: state.name, password: state.password}
            if(index === null)  copy.push(obj)
            else copy.splice(index, 1 , obj)
            success(` ${index !== null ? "Record Updated" : "Record Added" } `)
            setList(copy)
            emptyField()
        }else{
            if(state.name.length<1) error('Name is empty')
            if(state.password.length<1) error('Password is empty')
        }
    }
    // console.log(list)
      // console.log(index)

    const emptyField = () =>{
        setState({
            name : '',
            password : ''
        })
    }

    const onChangeName = (e) =>{
        const data = {...state}
        data.name = e.target.value;
        setState(data)
    }
    const onChangePassword = (e) =>{
        const data = {...state}
        data.password = e.target.value;
        setState(data)
    }

    const deleteRecord = (i) =>{
        const copy = [...list]
        copy.splice(i, 1)
        setList(copy)
       
    } 
    const editRecord = (i) =>{
        setIndex(i)
        setState({
            name:list[i].name,
            password: list[i].password
        })
    }
  
    const error = (msg) => {
        toast.error(msg,{
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
      }
      const success = (msg) => {
        toast.success(msg,{
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
      }

    return (
        <div className='todo'>
           <h5>Todo App</h5>
           <input type="text" placeholder="Name" onChange={onChangeName} value={state.name}></input>
           <input type="password" placeholder="Password" onChange={onChangePassword} value={state.password}></input>
           <button className='mt-3' onClick={()=>
                addRecord()
           }>Submit</button>
           <table className='table table-hover'>
               <thead>
                   <tr>
                       <th>Name</th>
                       <th>Password</th>
                       <th>Edit</th>
                       <th>Delete</th>
                   </tr>
               </thead>
               <tbody>
                  {
                      list.map((data , i)=>{
                          return(
                              <tr>
                                  <td>{data.name}</td>
                                  <td>{data.password}</td>
                                  <td><button onClick={()=>editRecord(i)}>Edit</button></td>
                                  <td><button onClick={()=>{
                                    if (window.confirm("DO you want to delete record"))
                                     deleteRecord(i)
                                  }
                                     }>Delete</button></td>
                              </tr>
                          )
                      })
                  }
               </tbody>
           </table>
        </div>
    )
}

export default Todos
