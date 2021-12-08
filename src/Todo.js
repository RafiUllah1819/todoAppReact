import React , {useState} from 'react';
import { toast } from 'react-toastify';

const Todo = () => {
    const [list, setList] = useState([])
    const [name , setName] = useState('') 
    const [index, setIndex] = useState(null)
    
    const add = () =>{
        const data = [...list];
        if(name.length>0){
            if(index===null) data.push({name})
            else data.splice(index, 1, {name})
            success(`${index !== null ? "Record Updated" : "Record Added"}`)
            setList(data)
        }else if(name.length<1) error('Please fill the field')
    }
    const emptyBio = () =>{
        setName('')
    }

    const deleteData = (i) =>{
        const data = [...list]
        data.splice(i, 1)
        setList(data)
        error("Record Deleted")
    }

    const editData = (i) =>{
        setIndex(i) 
        const temp = list[i]  
        // console.log("temp" , temp)
        setName(temp.name)
    }
    // console.log("index" , index)
   
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
        <div className="todo">
            Name : <input type="text"placeholder="Enter Name" value={name}
            onChange={(e)=>setName(e.target.value)}></input>
            <button onClick={()=>{
                add(); emptyBio()}}>Add</button>
            <div className="list mt-3">
                <table className="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                    list.map((data , i )=>{
                        return(
                           <tr key={i}>
                               <td>{data.name}</td>
                               <td><button onClick={()=>editData(i)}>Edit</button></td>
                               <td><button onClick={()=>{
                                    if (window.confirm("DO you want to delete record"))
                                   deleteData(i)
                            }}>Delete</button> </td>
                           </tr>

                        )
                    })
                }
                    </tbody>
                    </table>
             
            </div>
        </div>
    )
}

export default Todo
