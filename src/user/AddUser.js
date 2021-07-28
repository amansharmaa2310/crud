import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const AddUser = () => {
    let history = useHistory();
    const [user, setUser] = useState({

        name:"",
        username:"",
        email:"",
        phone:"",
        website:"",
    });
    const{name,username,email,phone,website}= user;
    const onInputChange = e =>{
        // console.log(e.target.value);
        setUser({...user,[e.target.name]:e.target.value})
    };
    const onSubmit = async (e) =>{
        e.preventDefault();
        await axios.post("http://localhost:3001/user",user);
        history.push("/");

    };
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                 <h2 className="text-center mb-4">Add A User</h2>
                 <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                        type="text"
                        className="form-control form-control-lg my-4"
                        placeholder="Enter your Name"
                        name="name"
                        value={name}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        className="form-control form-control-lg my-4"
                        placeholder="Enter your Username"
                        name="username"
                        value={username}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        className="form-control form-control-lg my-4"
                        placeholder="Enter your E-mail Address"
                        name="email"
                        value={email}
                        onChange={e => onInputChange(e)}
                        />
                    </div>    
                    <div className="form-group">
                        <input
                        type="text"
                        className="form-control form-control-lg my-4"
                        placeholder="Enter your phone number"
                        name="phone"
                        value={phone}
                        onChange={e => onInputChange(e)}
                        />
                    </div>    
                    <div className="form-group">
                        <input
                        type="text"
                        className="form-control form-control-lg my-4"
                        placeholder="Enter your Website Name"
                        name="website"
                        value={website}
                        onChange={e => onInputChange(e)}
                        />
                    </div>

                    <button className="form-control form-control-lg my-4 btn btn-primary">Add User</button>
                    </form>
                    
                </div>
           </div>
        
    )
    
}

export default AddUser;
