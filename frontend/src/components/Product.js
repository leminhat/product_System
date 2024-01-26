import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
function Product(){
    
    const [product,setProduct] = useState([])


    useEffect(() => {
        axios.get('http://localhost:8081/api/v1/product/list')
        .then(res => setProduct(res.data))
        .catch(err => console.log(err))
    }, []) 

    const handleDelete = (id) => {
        if (
     window.confirm("Ban co muon xoa san pham khong") ===
     true
   ) {
   
   axios.delete("http://localhost:8081/api/v1/product/delete/"+id)
     .then((res) => {
       alert("Delete Sucessfully");
       
       axios.get("http://localhost:8081/api/v1/product/list" )
       .then((res) => {
           setProduct(res.data)
       })
       .catch((err => {
           console.log(err)
       }));

     })
     .catch((error) => {
       console.log(error);
     });

     
 }};
    
    console.log("locasl", localStorage.getItem("check"))

    return(
        <div className='d-flex vh-100 bg-primary justify-content-center aligin-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <Link to={"/product/create"} className='btn btn-success'>ADD Product</Link>
                {
                    localStorage.getItem("check")==0 && (
                <Link to={"/login"} className='btn btn-success'>Login</Link>)
                }

{
                    localStorage.getItem("check")==1 && (
                <Link to={"/login"} className='btn btn-success'>Logout</Link>)
                 
                }
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Detail</th>
                            <th>Date Create</th>
                            <th>Date Update</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            product.map((data, i) => (
                            <tr key = {data.id}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.image}</td>
                                <td>{data.detail}</td>
                                <td>{ moment(data.datecreate).format("DD/MM/YYYY")}</td>
                                <td>{ moment(data.dateupdate).format("DD/MM/YYYY")}</td>
                                { localStorage.getItem("check")==0 ? ( <td>Lien He</td>):(<td>{data.price}</td>

                                )}
                                {/* <td>{data.price}</td> */}
                                <td>
                                    <Link to={`update/${data.id}`} className='btn btn-primary'>Update</Link>
                                    <button className='btn btn-danger ms-2' onClick={e => handleDelete(data.id)}>Delete</button>
                                </td>
                            </tr>
                        )) }

                       
                    </tbody>
                </table>


            </div>

        </div>
    )
}

export default Product;
