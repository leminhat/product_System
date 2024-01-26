const express = require('express')
const mysql = require('mysql2');
const cors = require('cors')
const port = 8081;

const app = express();

app.use(express.json())
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  port : 3306,
  user: 'root',
  password: '123456',
  database: 'manageproduct'
});

// Check User
app.post('/login', (req,res) =>{
  const sql = "SELECT * FROM login WHERE username=? and password=?";
 
  db.query(sql, [req.body.email, req.body.password], (err,data) =>{
    if(err) return res.json("Error")
    if(data.length >0){
      return res.json({success:true,mess:"Login Success"});
    } else{
      return res.json({success:false, mess:"Login Fail"});
    }
    
})})

//Tao 1 User
app.post('/api/v1/login/create', (req,res) =>{
  const sql = "INSERT INTO `manageproduct`.`login` (`username`, `password`) VALUES (?);";
  values=[
    req.body.email,
    req.body.password
  ]
  console.log(req.body.email)
  console.log(req.body.password)
  db.query(sql, [values], (err,data) =>{
    if(err) return res.json("Error roi")
    else res.json(data);
    })
  })


  // Tao 1 product
  app.post('/api/v1/product/create', (req,res) =>{
    const sql = "INSERT INTO `manageproduct`.`product` (`name`, `image`, `detail`, `price`) VALUES (?);";
    values=[
      req.body.name,
      req.body.image,
      req.body.detail,
      req.body.price
    ]
    
    db.query(sql, [values], (err,data) =>{
      if(err) return res.json("Error roi")
      else res.json(data);
      })
    })
   
// Xoa 1 San pham
    app.delete('/api/v1/product/delete/:id', (req,res) =>{
      const sql = "DELETE FROM `manageproduct`.`product` WHERE (`id` = ?);"
      const id = req.params.id;
      console.log("delete",id )
      
      db.query(sql, [id], (err,data) =>{
        if(err) return res.json("Error roi")
        else res.json(data);
        })
      })

  // Cap nhat san pham
  app.put('/api/v1/product/update/:id', (req,res) =>{
    const sql = "UPDATE product SET `name` = ?, `image` = ?, `detail` = ?, `price` = ? WHERE (`id` = ?);"
    console.log(req.body)

    if(req.body.image=="") req.body.image ='';
    if(req.body.price=="") req.body.price = 0;
    
    
    values=[
      req.body.name,
      req.body.image,
      req.body.detail,
    
      req.body.price
    ]
  
    const id = req.params.id
    console.log(req.params.id)
    db.query(sql, [...values,id], (err,data) =>{
      if(err) return res.json("Error roi")
      else res.json(data);
      })
    })



app.listen(port,() =>{
  console.log("listening......")
})

//Lay danh sach san pham
app.get('/api/v1/product/list', function (req, res) {
  const sql = "SELECT * FROM product";
  db.query(sql,(err,data)=>{
      if(err) return res.json("Error");
      return res.json(data);
  })
})



