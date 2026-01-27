const { getAll, getById, insert, deleteUser, updateUser } = require("../Models/user.model")

async function getAllUser() {
    try {

        const data = await getAll()

        return {
            status: 200,
            error: false,
            data,
            massage: "Data Fetched Successfull...!"
        }
    }
    catch (err) {
        return {
            status: 404,
            error: true,
            massage: err
        }
    }
}

async function getUserbyID(id) {
    try {
        const data = await getById(id)

        if (data.length != 0) {
            return {
                status: 200,
                error: false,
                data,
                massage: "Data Fetched Successfull...!"
            }
        }
        else{
            return {
                status:404,
                error:true,
                massage:"User not found for given userId"
            }
        }


    }
    catch (err) {
        return {
            status: 404,
            error: true,
            massage: err
        }
    }
}


async function addUser(fromdata){
    try{
        const data = await insert(fromdata)
        return {
            status:200,
            error:false,
            data:data,
            massage:"User added successfull...!"
        }
    }
    catch(err){
        return {
            status:404,
            error:true,
            massage:err
        }
    }
}

async function deleteUserById(id){
    try{
        const data = await deleteUser(id)
        return {
            status:200,
            error:false,
            data:data,
            massage:"User deleted successfull...!"
        }
    }
    catch(err){
        return {
            status:404,
            error:true,
            massage:err
        }
    }
}

async function updateUserByID(id,newData){
    try{
        const data = await updateUser(id,newData)
        return {
            status:200,
            error:false,
            data:data,
            massage:"User Updated successfull...!"
        }
    }
    catch(err){
        return {
            status:404,
            error:true,
            massage:err
        }
    }
}

module.exports = { getAllUser, getUserbyID,addUser,deleteUserById,updateUserByID}

