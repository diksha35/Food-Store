import { useState,useEffect } from "react";


const useOnlineStatus=()=>{
    const [status, setStatus]=useState(true);
    
   useEffect(()=>{
    window.addEventListener("offline",(event)=>{
        setStatus(false);
    });

    window.addEventListener("online",(event)=>{
        setStatus(true);
    })
   },[]);


    return status;
}

export default useOnlineStatus;