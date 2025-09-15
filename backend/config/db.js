import mysql from 'mysql2'
import dotenv from 'dotenv'

const db = mysql.createPool({
 host: "localhost",
 user: "root",
 port : "3306",
 database : "kal",
 password:"-------------",


})

db.getConnection((error,connection)=>{

    if(error){
        console.log(error)
    }else{

        console.log("Database connected");
        connection.release()
    }


})

export default db.promise();