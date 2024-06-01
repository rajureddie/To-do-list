
import { useState,useContext,createContext } from 'react';

const Datacontext = createContext();
export const useData = ()=> useContext(Datacontext);
export const DataProvider=({children})=>{
    const [inputmsg , setinputmsg]=useState([]);
    const receiveMessage =(message)=>{
        setinputmsg([...inputmsg,message]);
    };
    return(
        <Datacontext.Provider value={{inputmsg,receiveMessage}}>
            {children}
        </Datacontext.Provider>
    )
}