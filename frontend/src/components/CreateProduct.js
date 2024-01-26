import React  from "react";
import { useState } from "react";
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";




function CreateProduct(){

    const [name,setName] = useState('')
    const [image, setImage] = useState('')
    const [detail, setDetail] = useState('')
    const [datecreate, setDatecreate] = useState('')
    const [dateupdate, setDateupdate] = useState('')
    const [price, setPrice] = useState('')
    
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        console.log(image)
        axios.post('http://localhost:8081/api/v1/product/create',{name,image,detail,price})
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
                    <h1>ADD Product</h1>
                    <div className='mb-3'>
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder ="Enter name" className="form-control" 
                        onChange={e => setName(e.target.value)}/> 
                    </div>
                   
                    <label className="block">
                                    <span className="sr-only">Choose profile photo</span>
                                    <input
                                        onChange={e=> setImage(e.target.files[0].name)}
                                       
                                        type="file"
                                        name="Image"
                                        className="disabled:cursor-not-allowed cursor-pointer block w-full text-sm text-slate-500
                                        file:mr-4 file:py-2 file:px-4
                                        file:rounded-full file:border-0
                                        file:text-sm file:font-semibold
                                        file:bg-violet-50 file:text-violet-700
                                        hover:file:bg-violet-100
                                    "
                                    />
                                </label>
                                <div className="max-h-full justify-center flex">
                                    <img
                                        id="book-card-img"
                                        className="min-h-300 max-h-80 object-cover"
                                        src={`../../images/${image}`}
                                        alt="BookCard"
                                    />
                                  
                                 
                                    
                                </div>
                    <div className='mb-3'>
                        <label htmlFor="detail">Detail</label>
                        <input type="text" placeholder ="Enter Detail" className="form-control"
                        onChange={e => setDetail(e.target.value)}/> 
                    </div>
                    
                    <div className='mb-3'>
                        <label htmlFor="price">Price</label>
                        <input type="number" placeholder ="Enter Price" className="form-control"
                        onChange={e => setPrice(e.target.value)}/> 
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
           
      
            
        </div>
    )
}

export default CreateProduct ;