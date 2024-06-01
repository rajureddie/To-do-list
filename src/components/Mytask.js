import React, { useEffect, useState } from 'react'
import { useData } from './Datacontext'
import { Link } from 'react-router-dom';
import Taskcards from './Taskcards';


const Mytask = () => {
    const {inputmsg}=useData();
    const[taskbox,settaskbox]=useState([])
    console.log(inputmsg)
    useEffect(()=>{
      settaskbox(inputmsg.map(task => ({ title: task.title, items: task.items })));

    }, [inputmsg]);
   
    
  return (
    <body>
        <div className='mytask-container'>
        
        <div className='mytask-card'>
                {taskbox.map((task, index) => (
                    <div key={index} className='card-theme'>
                        <div className='card-title'>{task.title}</div>
                        <ul>
                            {task.items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
                
        

        

    </div>
    </body>
  )
}

export default Mytask