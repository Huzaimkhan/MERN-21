import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Swal from 'sweetalert2'

function App() {
  function handle(e){
    e.preventDefault()
    Swal.fire({
      title: 'Please provide valid name!',
      text: 'Do you want to continue',
      icon: 'success',
      confirmButtonText: 'Cool'
    })
  }

  return (
    <>
    <h1>Contact us</h1>
    <form onSubmit={handle}>
      <input type="" placeholder='user name' required/>
      <input type="" placeholder='Email'required/>
    
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <button type='submit' >Send</button>
    </form> 
    </>
  
  )
}

export default App
