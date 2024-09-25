import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import Navbar from './components/Navbar.jsx'
import count from './components/count.jsx'

import { increment,decrement,multiply ,reset} from './Redux/counter/counterSlice.js'

function App() {
  const count = useSelector((state) => state.counter.value)
   const dispatch = useDispatch();
  return (
    <>
    <Navbar/>
    <count/>
      <div>
        <button className='B0'>Counter value currently is  : {count}</button>
        
        <button className='B1' onClick={()=>  dispatch(increment())}>Increment</button>
        <button className='B2' onClick={()=>  dispatch(decrement())}>Decrement</button>
        <button className='B3' onClick={()=>  dispatch(reset())}>reset</button>
       </div>
    </>
  )
}

export default App
