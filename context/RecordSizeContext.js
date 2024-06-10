"use client"

import React, {createContext, useState} from 'react';


export const RecordSizeContext = createContext();

export const RecordSizeProvider = ({children}) =>{
    const [selectedRecordSize, setRecordSize] = useState(10)


    const changeRecordSize = (size) =>{
        console.log(size)
        setRecordSize(parseInt(size));
    };
    
    
    return(
        <RecordSizeContext.Provider value={{selectedRecordSize, changeRecordSize}}>
            {children}
        </RecordSizeContext.Provider>
    )
};
