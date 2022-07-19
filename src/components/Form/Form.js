
import React, { useState } from 'react';


const Form = () => {


    const [user,setUser] = useState({name:"",email:"",password:""})
    const {name,email,password} = user;

    const handelChange=(e)=>{

          setUser({...user,[e.target.name] :e.target.value});

        // const fieldName = e.target.name;
        // if(fieldName==="name"){
        //     setUser({name:e.target.value,email,password})
        // }
        // if(fieldName==="email"){
        //     setUser({name,email :e.target.value,password})
        // }
        // if(fieldName==="password"){
        //     setUser({name,email ,password :e.target.value})
        // }


    }
    
    const handelSubmit =(e)=>{
        console.log("from submit")
        e.preventDefault();
     
        console.log(user)
    
    }


    
    
        return (
            <div>
                <h1>Registration Form</h1>
                <form action="" onSubmit={handelSubmit}>
                    <div className='fromGroup'>
                    <label htmlFor="name">Name : </label>
                    <input type="text" name='name' id='name' value={name} onChange={handelChange} required />
                    </div>
    
                    <div className='fromGroup'>
                    <label htmlFor="email">Email : </label>
                    <input type="email" name='email' id='email' value={email} onChange={handelChange} required />
                    </div>
    
                    <div className='fromGroup'>
                    <label htmlFor="password">Password : </label>
                    <input type="password" name='password' id='password' value={password} onChange={handelChange} required />
                    </div>
    
                    <div className='fromGroup'>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        );
    };

export default Form;