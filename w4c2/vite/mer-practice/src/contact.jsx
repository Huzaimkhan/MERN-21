import React from 'react'
import { useState } from "react";
import Swal from 'sweetalert2';
const Contact = () => {

  const [a, seta] = useState('')
  const [b, setb] = useState('')
  const [result, setResult] = useState('')
  return (
    <div className='cal'>
      <h1>Calculator</h1>
      <input type="text" placeholder='Enter Input One'
        value={a}
        onChange={(e) => seta(e.target.value)}
      />
      <input type="text" placeholder='Enter Input Two'
        value={b}
        onChange={(e) => setb(e.target.value)}
      />
      <div className="btns">
        <button onClick={() => setResult(Number(a) + Number(b))}>+</button>
        <button onClick={() => setResult(Number(a) - Number(b))}>-</button>
        <button onClick={() => setResult(Number(a) / Number(b))}>/</button>
        <button onClick={() => setResult(Number(a) * Number(b))}>*</button>
        <button onClick={() => Swal.fire({
          title: "Good job!",
          text: `Your Answer Is ${result}`,
          icon: "success"
        })}>=</button>
    </div>
    </div >
  )
}

export default Contact