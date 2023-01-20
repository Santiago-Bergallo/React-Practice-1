import React from 'react'
import { useState, useEffect } from 'react'
import { TextField, Button } from '@mui/material'
import axios from 'axios'


const Student = () => {

    const url = 'http://localhost:8080/students/add'
    let student
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        student = {name, address}
        console.log(student)

        fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/JSON"},
            body: JSON.stringify(student)
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
}

  return (
    <div>   
    <form action="">
        <h1>Add Student</h1>
    <input placeholder='Student Name' type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
    />
    
    <input id="outlined-basic" label="Student address" variant="outlined" className='TextField' placeholder='Student address'
    value={address}
    onChange={(e) => setAddress(e.target.value)} />
    
    <div className='div-Container'>
    <button variant="contained" onClick={handleSubmit}>submit</button>
    </div>
    </form>
    </div>
  )

}

export default Student