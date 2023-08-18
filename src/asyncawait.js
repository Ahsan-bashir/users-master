const { use } = require('chai')
const users = require('./users')
// Define a function that returns a promise to get all users and return a promise
const getAllUsers = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(users.length==0)
            reject("No users")
        resolve(users)
        },2000)
    })
 
}
//Define a function to create a new user and return a promise
const createUser = (user) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(user){
                resolve(user)
            }
            reject("No user to be added")
        },2000)
    })
 }
// Define a function to get a user by id and return a promise
const getAUserByID = (id) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reqUser=users.filter(currentUser=>currentUser.id===id)
            if(reqUser){
                resolve(reqUser)            
            }
            reject("User does not exist")
        },2000)
    })
}
// Define an async function that calls the createUser and getAllUsers function using await 
// and returns all users
const displayUsers = async (user) => {
 await  createUser(user)
   const allUsers = await getAllUsers();
   return allUsers;
}
//Define a async function to display a specific user by Id
// return the user 
const displayAUser = async(id) =>{
    const user = await getAUserByID(id);
    return user;
}

module.exports = {
    getAllUsers, getAUserByID, createUser, displayAUser, displayUsers
}