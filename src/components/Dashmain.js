import React, { useState,useContext } from 'react'
import '../App.css'
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import Inputpop from './inputpop';
import { Link } from 'react-router-dom';
import Mytask from './Mytask';
import { Button } from '@mui/material';
import { useData } from './Datacontext';



const Dashmain=()=>{
    const [showpopup , setshowpopup]=useState(false);
    const {inputmsg,receiveMessage}=useData();
   
    const handleAddMessage=(message)=>{
      receiveMessage(message);
    }
   
   
  return (
    <div className='div-container'>
        <div className='div-searchbar'>
            <input
            type='text'
            id='search'
            name='search'
            placeholder='search for task ...'
            />
            <button type='submit'><ContentPasteSearchIcon/></button>

        </div>
        <div>

        </div>
        <div className='div-main'>
            <div id='title-container'>
            <Link to='/mytask' className='custom-link'><div className='daily-task'>Mytasks</div></Link>
            <div className='daily-task'>important</div>
            
            </div>
            <hr></hr>
            
            <h1 className='today-task'><u>To Day Tasks</u></h1>
            <div className='div-task-container' id='task-container'>
                
                    {inputmsg.map((message1,index)=>{
                      return (<div className='div-task' key={index}>
                        {message1.text}
                      </div>)

                    })}
               
                

            </div>


        </div>
        <div className="bottom-button-container" >
        <button onClick={()=>{setshowpopup(true)}}>+</button>
      </div>
      

      {showpopup&&<Inputpop onClose={()=>setshowpopup(false) } sendMessage={handleAddMessage} />}
      
      

    </div>
  )
}

export default Dashmain;