const { getAll, getById, getUserByUserName } = require("../Models/User.model");

const jwt = require('jsonwebtoken')
require('dotenv').config()

const key = process.env.key

async function getAllUser(){
    try{
        let data =await getAll()

        return{
            error:false,
            data,
            message:"Data Fetched !..."
        }

    }
    catch(err){
        return {
            error:true,
            message:err
        }
    }
}

async function getUserById(id) {
    try{
        const data = await getById(id)

        return{
            error:false,
            data,
            message:"Data fetched !..."
        }
    
    }
    catch(err){
        return{
            error:true,
            massage:err.massage
        }
    }
}

async function checkLogin(userData){

    try{
        let data = await getUserByUserName(userData.userName)

        if(data.length == 0){
            return{
                error:true,
                massage:"User not found"
            }
        }

        else{

            if(data[0].password == userData.password){
                let token = jwt.sign({id:data[0].userId,userName:data[0].userName},key)

                return{
                    error:false,
                    token,
                    massage:"Login successfull"
                }
            }

            else{
                return{
                    error:true,
                    massage:"Username or Password does not match"
                }
            }

        }
    }
    catch(err){
        return{
            error:true,
            massage:err
        }
    }

}

module.exports = {getAllUser,getUserById,checkLogin}