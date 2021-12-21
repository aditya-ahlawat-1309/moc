import React,{useEffect} from 'react'
import {useHistory} from "react-router-dom";

function Logout() {

//promises

const history = useHistory();

useEffect(() => {
fetch('https://secure-lowlands-21452.herokuapp.com/logout' , {
    method:"GET",
    headers:{
        Accept:"appllication/json",
        "Content-Type":"application/json"
    },
    credentials:"include"
}).then((res) => {
history.push('/' , {replace:true});
if(res.status != 200){
const error = new Error(res.error);
throw error;
}
}).catch((err) => 
{
    console.log(err);console.log(err)})
})

    return (
        <div>
            
        </div>
    )
}

export default Logout
