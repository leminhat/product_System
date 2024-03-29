import React from "react";
import { useState } from "react";
import axios from 'axios'
import { Link,useNavigate } from "react-router-dom";




function Login() {
    localStorage.setItem("check", 0)
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8081/login', { email, password })
            .then((res) => {
                console.log("resdata", res.data)
                console.log("resdatasuc", res.data.success)
                if (res.data.success) {
                    localStorage.setItem("check", 1)
                    navigate("/product")

                }
                else alert("Sai Tai Khoan hoac Mat Khau"); 

            })
            .catch(err => console.log(err));


    }

    return (

        <div className='d-flex vh-100 justify-content-center align-items-center bg-primary'>
                 
            <div className='p-3 bg-white w-25'>
            <Link to={"/product"} className='btn btn-success'>Product</Link>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter Email" className="form-control"
                            onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter Password" className="form-control"
                            onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button className="btn btn-success">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;