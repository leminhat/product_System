import React  from "react";
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";




function CreateUser(){

    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8081/api/v1/login/create',{email,password})
        .then(res => {
            console.log(res);
            navigate('/product')
        })
        .catch(err => console.log(err));
    }

    return(
        
        <div className='d-flex vh-100 justify-content-center align-items-center bg-primary'>
            
            <div className='p-3 bg-white w-25'>
                <form onSubmit={handleSubmit}>
                    <h1>Add User</h1>
                    <div className='mb-3'>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder ="Enter Email" className="form-control"
                        onChange={e => setEmail(e.target.value)}/> 
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter Password" className="form-control"
                         onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateUser;