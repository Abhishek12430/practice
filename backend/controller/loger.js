import db from "../config/db.js";

 export  const Users = async(req,res)=>{
try{
const [response] = await db.query("select * from users");
if(response.length>0){
    return res.status(200).json({data:response})
}
return res.status(400).json({message:"database problem"})
}catch(error){
    return res.status(500).json({message:"something went wrong",error})
}   
}


export const deletUser = async(req,res)=>{
const {id}= req.body;

try{
  const [response] = await db.query('delete from users where id=?',[id]);
if(response.affectedRows>0){
    return res.status(200).json({message:"user is got deleted"})
}
return res.status(404).json({message:"there is problem in database"})
}
catch(error){
  return res.status(500).json({message:"there is problem in database"})
}

}