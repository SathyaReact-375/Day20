import React from 'react'
import { createPortal } from 'react-dom'
import Form from './Form'



function Child() {
  return (
    <>
    <h1 style={{textAlign:"center"}}>Task7</h1>
    <p style={{textAlign:"center"}}>This is child component </p>
    {createPortal(<p style={{textAlign:"center"}}>Task 7 this line created under Child component using createPortal (Grand child) <br />
    Nested Portals: Create a portal within another portal component.
    </p>,document.getElementById('outside'))}
    
    {createPortal(<Form/>,document.getElementById('portal-container'))}
    <h1 style={{textAlign:"center"}}>Task 9,10,11 Completed</h1>
    <p style={{textAlign:"center"}}>Task 8 form and grandchild are separate portals presented in one page</p>
    <p style={{textAlign:"center"}}>Hover the Task 3 button</p>
    </>       
  )
}

export default Child