import React,{useState,useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
    const[users,setUser]= useState([]);

    useEffect(() => {
        loadUsers();
    },[]);

    const loadUsers = async() =>{
        const result =await axios.get("http://localhost:3001/user");
        setUser(result.data.reverse());
    };
    const deleteUser = async id => {
        await axios.delete(`http://localhost:3001/user/${id}`);
        loadUsers();
      };

    return(
        <div className="container">
            <div className="py-4">
                <table class="table border shadow">
  <thead class="thead-dark bg-dark text-white">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
 {users.map((user,index) =>(
      <tr>
      <th scope="row">{ index + 1 }</th>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>
          <Link class="btn btn-primary me-2"to={`/user/${user.id}`}>View</Link>
          <Link class="btn btn-outline-primary me-2" to={`/user/edit/${user.id}`}>Edit</Link>
          <Link class="btn btn-danger me-2" onClick={() => deleteUser(user.id)}>Delete</Link>
      </td>
      </tr>
  ))}
  </tbody>
</table>
            </div>
        </div>
    )
}

export default Home;