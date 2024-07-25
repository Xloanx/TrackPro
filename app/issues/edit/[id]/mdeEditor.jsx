'use client'

import React from 'react';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";



const MdeEditor = ({placeholder, onChange, value, field}) => {
  return (
    <>
    <SimpleMDE placeholder={placeholder}
              onChange={onChange}
              value={value}
              field={field}/>
    </>
  )
}

export default MdeEditor