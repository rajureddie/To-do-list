import React, { useState,useContext, createContext } from 'react'
import '../App.css'
import CloseIcon from '@mui/icons-material/Close';
import Dashmain from './Dashmain';





const Inputpop= ({onClose , sendMessage })=> {
 




  const [message,setmessage]=useState({
    title:"",
    text:"",
    id:""
  })
  const [editmessage,seteditmessage]=useState(
    {
      id:"",
      isedited: false 

    }
  )

const [list, setlist]=useState([])
const handlemessage=(e)=>{
  
  setmessage({...message,text: e.target.value });
}
const handletitle=(e)=>{
  setmessage({...message,title:e.target.value})
}
const handlesubmit=(e)=>{
  e.preventDefault();
  if(message.text!=="" ){
    let newtodo={
      title:message.title,
      text:message.text,
      id: Math.floor(Math.random() * 1000000)

    }
    setlist([...list,newtodo]);
    sendMessage(newtodo);
    setmessage({
      title:"",
      text:"",
      id:""
    })
    
    

  }else{
    alert("enter the task")
  }


  
  
}
const handledelete=(id)=>{
  let deletetodo = list.filter((eachitem)=>{
   
    return eachitem.id !== id

  })
  
  setlist(deletetodo);

}
const changeeditmsg=(id)=>{
  seteditmessage({
    ...editmessage,

    id:id,
    isedited: true,
  });
  let edititem=list.find((eachitem)=> eachitem.id===id);
  setmessage({
    ...message,
    id:edititem.id,
    text:edititem.text

  })

}
const handleedit=(e)=>{
  e.preventDefault();
  let newtodos=list.map((eachitem)=>{
    if(eachitem.id===editmessage.id){
      return{
        text:message.text,
        id:editmessage.id
      }
    }else{
      return eachitem;
    }

  })
  setlist(newtodos);
  setmessage({
    id:"",
    text:"",
  })
  seteditmessage({
    id:"",
    isedited:false,
  })
  
}


  return (
    <div className='div-container-popup'>
      
      <div>
        
      </div>
      
      <div className='form-container'>
        <div className='close-task-container'>
        <button id='close' onClick={onClose}><CloseIcon/></button>

        </div>
      

      
        
      <form className='form'>
        <input
        className='input'
        type='text'
        name='messagetitle'
        placeholder='enter the title'
        onChange={handletitle}
        

        />
        <input
        className='input'
        id='userinput'
        type='text'
        placeholder='enter the tasks'
        name='message'
        value={message.text}
        onChange={handlemessage}
        />
        {editmessage.isedited ? <button  type='submit' onClick={handleedit}>edit</button>:
        <button id = 'add-task-btn' type='submit' onClick={handlesubmit} >ADD</button>
        }
       
        
      </form>
      <hr/>
      <div className='task-list' >
      <ul>
        {
          list.map((eachitem)=>{
            const {text,id}=eachitem;
            return<li key={id}>
             
             
              <span>{text}</span>
              <button id='deletetask' onClick={()=>handledelete(id)}>delete</button>
              <button id='edittask' onClick={()=>changeeditmsg(id)}>edit</button>

            </li>

          })
        }
      </ul>
      

      </div>
      


    </div>
 
    
    
    
    
    </div>
  )
}
export default Inputpop;
