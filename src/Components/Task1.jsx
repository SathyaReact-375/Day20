import { useState } from 'react'
import { createPortal } from 'react-dom'
import PortalComponent from './PortalComponent'
import WithPortal from './withPortal'
import PortaledModal from './PortaledModal'
import ConfirmationDialog from './ConfirmationDialog'

function Task1() {
    
    const[state,setState]=useState(false)
    const [isDialogOpen, setDialogOpen] = useState(false);

  const handleAction = () => {
    setDialogOpen(true);
  };

  const handleConfirm = () => {
    setDialogOpen(false);
    console.log('Action confirmed');
  };

  const handleCancel = () => {
    setDialogOpen(false);
    console.log('Action canceled');
  };
    function openclose(){
        setState(pre=>!pre)
    }
    const modalStyle = {
        height: "300px",
        width:"300px",
        textAlign:"center",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: state?"#007BFF":"#FF5733",
        transition: state?"transform 0.3s ease, background-color 0.3s ease":"",
        padding: "20px",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
        zIndex: 1000
        
       }
       document.getElementById("outside").addEventListener("click",()=>{
        setState(false)
       })
       document.getElementById("root").addEventListener("click",()=>{
        setState(false)
       })
       
      
       
  return (
   <>
   <div style={{textAlign:"center",border:"1px solid black"}}>
    <h1>Task1</h1>
    <h1>This is root portal</h1>
   <h3>Introduction to Portals</h3>
  <p>
    React Portals allow you to render a child component outside the DOM hierarchy of its parent component. 
    They are particularly useful for UI elements like modals, tooltips, and dropdowns, where you need 
    to ensure proper styling, positioning, and z-index behavior. By using portals, these components 
    can be rendered in a different part of the DOM, such as a dedicated div, ensuring a cleaner and 
    more manageable structure.
  </p>
    {createPortal(<div style={{ backgroundColor: 'lightgray', padding: '20px',textAlign:"center" }}>
        <button id='hoverid' onMouseOver={()=>{
          setState(true)
        }} onClick={()=>openclose()}>close/open(task3)</button>
        <h1>Task2 & Task 3 & Task 5 & Task 6</h1>
        <h1>Task4</h1>
        <p> Applied custom styles to portal elements without 
        affecting the parent component<b>(Task4)</b></p>
        <p>the portal when clicking outside 
        the modal it will close<b>(Task6)</b> .</p>
        <p> Click the button Demonstrated event bubbling in portals by clicking on both 
        the portal component and its parent.<b>(Task5)</b></p>
        {state&&createPortal( <div ><p style={modalStyle}>Task 5<br></br> Demonstrated event bubbling in portals by clicking on both 
            the portal component and its parent.
            <button onClick={()=>setState(!state)}>close</button></p>     
            </div>,document.getElementById('tooltip'))}
      <p>This div is rendered outside the main DOM tree <b>Task2</b>.</p> 
    </div>,
    document.getElementById('outside'))}
    
    <PortalComponent/>
   
      <PortaledModal message="This modal is rendered through a portal." />
      <div style={{ padding: '20px' }}>
        <h1>Miniproject1</h1>
      <h1>Confirmation Dialog Demo</h1>
      <button onClick={handleAction}>Perform Action</button>
      {isDialogOpen && (
        <ConfirmationDialog
          message="Are you sure you want to proceed?"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </div>


   </div>
   
   </>
  )
}

export default Task1