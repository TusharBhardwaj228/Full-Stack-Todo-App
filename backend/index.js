const express = require("express");
const {todo} = require("./db/dbconnection.js");
const {createtodo, updatetodo} = require("./types");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
//to create todo
app.post("/todo", async(req,res)=>{
  const bodyData = req.body;
  const data = createtodo.safeParse(bodyData);
  if(!data.success){
    res.status(401).json({msg:"please put details in words."});
    return;
  }
/*   console.log(data); */
  const finalData = await todo.create(bodyData);
  if(finalData){
    res.status(200).json({msg:"created successfully.", finalData});
    return;
  }
  res.status(200).json({msg:"something went wrong"});
})

//to get all todos
app.get('/todos', async(req,res)=>{
  const data = await todo.find();
  if(data){
    res.status(200).json(data);
    return;
  }
  res.status(401).json({msg:"something went wrong"});
});

app.put('/completed', async(req,res)=>{
  const updateData = req.body;
  console.log(updateData);
  const parseUpdateData = updatetodo.safeParse(updateData);
  if(!parseUpdateData.success){
    res.status(401).json({msg:"Please put id in string"});
    return;
  }
  const setData = await todo.findOneAndUpdate({
    _id:updateData.id
  },{
    completed:true
  });
  if(setData){
    res.status(200).json({msg:"updated successfully."});
    return;
  }
  res.status(401).json({msg:"something went wrong."})
});


app.listen(3000);