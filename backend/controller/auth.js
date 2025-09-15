import db from "../config/db.js";


export const Login = async(req,res)=>{
    const{ email,password} = req.body;
try{
    const[response] = await db.query('select * from users where email = ? and password=?',[email,password])

if(response.length>0){
    return res.status(200).json({user:response[0],message:"login sussefuly"})
}
return res.status(404).json({message:"user does not exit"})
}catch(error){
return res.status(500).json({message:"there is error",error})

}

}

export const Register = async(req,res)=>{
const{name,email,number,subject,branch,password} = req.body;
try{
const [response] = await db.query("select * from users where email = ?",[email])
if(response.length>0)
    {
       return res.status(400).json({message:"user already exist"}); 
    }
    await db.query("insert into users(name,email,number,subject,branch,password)values(?,?,?,?,?,?)",[name,email,number,subject,branch,password])
    return res.status(201).json({message:"data successfuly enter"})
}catch(error){
   return res.status(500).json({message:"there is server problem",error})
}
}