import { blue } from '@mui/material/colors';

import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../redux/counterslice';
import { useState } from 'react';







function Counter() {
  // state to hold the value of input box
  const [range, setrange]=useState("")
    // hook is used to dispatch a function in action
    const dispatch=useDispatch()
    // component can access the state by using useselector hook
    const count=useSelector((state)=>state.counter.value)
    console.log(range);
  return (
    
       <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100 bg-dark'>
     <div className='bg-light p-5 rounded' style={{width:'500px'}}> <h1 style={{color:'blue'}}>Counter Application</h1>
     
      <div> 
      <center>
        <div style={{height:'150px'}}>
          <br></br>

          
           <h1>{count} </h1>
           
  
        </div>        <div>
           <Button onClick={()=>dispatch(increment(Number(range)))} variant="contained" color='success'>Increment</Button>
        
           <Button onClick={()=>dispatch(decrement(Number(range)))} variant="contained" color='warning'>Decrement</Button>
           <Button onClick={()=>dispatch(reset())} variant="contained" color='error'>Reset</Button>
  
        </div>

  
      </center>       
  
     </div>
     <div className='mt-4 w-100'>  <input type="text" onChange={(e)=>setrange(e.target.value)} className='form-control' style={{borderColor:'orange'}} placeholder='enter the Range' /></div>
     </div>
     

     </div>
       

      



        
     );
}

export default Counter;
