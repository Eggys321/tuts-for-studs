const USER_ROLE = require('../model/userRoleModel');
const asyncWrapper = require('../middleware/async')

// post users, C -- for create

const create_user = async (req,res)=>{
    try{
        await USER_ROLE.create(req.body);
        res.status(201).json({msg:"user created successfully"})
        
    }catch(error){
        console.log(error);
        res.status(500).json({msg:error})
    }
}
// const create_user = asyncWrapper( async (req,res)=>{
//         await USER_ROLE.create(req.body);
//         res.status(201).json({msg:"user created successfully"})
        
// })
// get users, R -- for read

const getAll_users = async(req,res)=>{
    try {
        const users = await USER_ROLE.find({});
        if(users.length < 1)return res.status(404).json({msg:'No users found'}) 
        res.status(200).json({users})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
        
    }
}

// update user, U -- for update

const update_user = async(req,res)=>{
    try {
        const {id:userId} = req.params
        await USER_ROLE.findOneAndUpdate({_id:userId},req.body,{
            new:true,
            runValidators:true
        })
        res.status(200).json({msg:"user updated successfully"})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
        
    }
}

// delete user, D -- for delete

const delete_user = async(req,res)=>{
    try {
        const {id:userId} = req.params
        await USER_ROLE.findOneAndDelete({_id:userId})
        res.status(200).json({msg:"user deleted successfully"})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
        
    }

}

// params for single user

const single_user = async(req,res)=>{
    try {
        const {id:userId} = req.params
        const user = await USER_ROLE.findOne({_id:userId})
        res.status(200).json({user})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
        
    }
}


module.exports = {
    create_user,
    getAll_users,
    update_user,
    delete_user,
    single_user
}