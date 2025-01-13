import React, { createContext, useContext, useState } from 'react'

export const SidebarContext =createContext();
const SidebarProvider =({children})=>{
    const [isOpen, setisOpen] = useState(false);
    const handleClose =()=>{
        setisOpen(false);
    }

    return <SidebarContext.Provider value={{isOpen,setisOpen,handleClose}}>
        {children}
    </SidebarContext.Provider>



}
