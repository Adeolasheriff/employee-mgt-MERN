const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const multer = require('multer')
const path = require('path')
const StaffsModel = require('./models/staff')
const ImageModel = require('./models/image')

const app = express()
app.use(express.json())
app.use(cors( {
    origin:['http://localhost:3000',""],
    methods:["POST","GET"],
    credentials:true,
    optionsSuccessStatus:200
}))
app.use(express.static('public'))


// mongoose.connect('mongodb://localhost:27017/employee')

mongoose.connect("mongodb+srv://sheriff:Kolawole101@cluster0.d2dpt.mongodb.net/employee")

//uploading images
const store = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,'public/images')
    },
    filename:(req,file,cb) => {
        cb(null, file.fieldname +  "_" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage:store
})


app.post('/upload',upload.single('file'),(req,res)=>{
   ImageModel.create({image:req.file.filename})
     .then(image => console.log(image))
     .catch(err => console.log(err))
})

app.get('/getImage',(req,res)=>{
    ImageModel.find()
    .then(image => res.json(image))
    .catch(err => console.log(err))
})

// register an employee        
app.post('/register',(req,res)=>{
    StaffsModel.create(req.body)
    .then(staffs => res.json(staffs))
    .catch(err => res.json(err))
})
// login a register user

app.post('/login',(req,res)=>{
    const {email,password} = req.body;
    StaffsModel.findOne({email:email})
     .then(users => {
        if(users){
        if(users.password === password){
            res.json('success')
        } else{
            res.json('password is incorrect')
        }}  else{
            res.json('records doesnt exist')
        }
      
     })
})

// get users from db
app.get('/',(req,res)=>{
    StaffsModel.find({})
    .then(staff => res.json(staff))
    .catch(err => res.json(err))
})

//add employee to db
app.post('/create',(res,req)=>{
    StaffsModel.create(req.body)
    .then(staff => res.json(staff))
    .catch(err => res.json(err))
})

//get single employee detail before update
app.get('/getuser/:id',(req,res)=> {
    const id = req.params.id
    StaffsModel.findById({_id:id})
    .then(staff => res.json(staff))
    .catch(err => res.json(err))
})
//updating
app.put('/update/:id',(req,res)=> {
    const id = req.params.id
    StaffsModel.findByIdAndUpdate({_id:id},{
        name:req.body.name,
        email:req.body.email,
        age:req.body.age,
        city:req.body.city,
    })
    .then(staff => res.json(staff))
    .catch(err => res.json(err))
})


// delete a single user from db
app.delete('/delete/:id',(req,res)=> {
    StaffsModel.findByIdAndDelete({_id:req.params.id})
    .then(staff => res.json(staff))
    .catch(err => res.json(err))
})

//connect to server
app.listen(8080,()=>{
    console.log('server is running')
})