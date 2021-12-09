import React , {useState ,useEffect} from 'react';
import { toast } from 'react-toastify';

const Todos = () => {

    const [index, setIndex] = useState({
        editData: {},
        x : null
    })
    const [filterData , setFilterData] = useState([])
    const [list, setList] = useState([])
    const [state, setState] = useState({
        name: '',
        password: ''
    })

    const addRecord = () =>{
        if(state.name.length>0 && state.password.length>0){
            const copy = [...list]
            const obj = {name: state.name, password: state.password}
            if(index.x === null)  copy.push(obj)
            else copy.splice(index.x, 1 , obj)
            success(` ${index.x !== null ? "Record Updated" : "Record Added" } `)
            setList(copy)
            emptyField()
        }else{
            if(state.name.length<1) error('Name is empty')
            if(state.password.length<1) error('Password is empty')
        }
    }

    useEffect(()=>{
        setFilterData(list)
    },[list])
    console.log(list)
      console.log(index)

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
        const temp = [...list]
        temp.x = i;
        let temp1 = list[i]
        setIndex(i)
        setIndex({
            ...index, editData: temp1, x: i 
        })
        setState({
            name:list[i].name,
            password: list[i].password
        })
    }
    console.log("index" ,index)
    console.log("editdata" , index.editData)
    console.log("x" , index.x)
    console.log("list" , list)
    const filterRecord = (e) =>{
        const value = e.target.value;
        let arr = []
        if(value.length>=3){
            arr = filterData.filter((data)=>{
                return data.name.toLowerCase().startsWith(value.toLowerCase())
            })
            setFilterData(arr)
        }else
        setFilterData(list)
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
           <h5 className='text-center mb-4'>Todo App</h5>
           <div className='search d-flex justify-content-between'>
           <h5>Total Records : {filterData.length}</h5>
                <div className='form-group'>
                    <input type='search' className='form-control' onChange={filterRecord} placeholder='search'></input>
                </div>
           </div>
           <div className='form-group'>
           <input type="text" className='form-control' placeholder="Name" onChange={onChangeName} value={state.name}></input>
           </div>
          <div className='form-group'>
          <input type="password"  className='form-control' placeholder="Password" onChange={onChangePassword} value={state.password}></input>
          </div>
           <button className='btn btn-success' onClick={()=>
                addRecord()
           }>Submit</button>
           <table className='table table-hover'>
               <thead>
                   <tr>
                       <th>Id</th>
                       <th>Name</th>
                       <th>Password</th>
                       <th>Edit</th>
                       <th>Delete</th>
                   </tr>
               </thead>
               <tbody>
                  {
                      filterData.map((data , i)=>{
                          return(
                              <tr>
                                  <td>{i+1}</td>
                                  <td>{data.name}</td>
                                  <td>{data.password}</td>
                                  <td><button className='btn btn-primary' onClick={()=>editRecord(i)}>Edit</button></td>
                                  <td><button className='btn btn-danger' onClick={()=>{
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
