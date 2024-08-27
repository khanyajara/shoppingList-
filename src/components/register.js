import React, {useState, useEffect} from "react";
import { json, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../redux/action";

const Registeruser = ()=> {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState(" ")
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const { loading, error: err } = useSelector((state) => state.registerUser)
   
    const SubmitInfo = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        dispatch(registerUser({ username, email, password }));
    }
       
    const users = json.parse(localStorage.getItem('users')) || [];

    if (users.find(user=> user.username === username)) {
        alert("Username Exists");
    }else {
        localStorage.setItem('users', JSON.stringify([...users, {username, email, password}]));

    }

    return (
        <div>
            <form onSubmit={SubmitInfo}>
                <label>Username:</label>
                <input
                type="text"
                value={username}
                onChange={(e)=> setUsername(e.target.value)}
                placeholder="Username...."
                required
                />
                <br/>
                <label>Email:</label>
                <input
                type="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                placeholder="Email...."
                required/>
                 <br/>
                 <label>Password:</label>
                 <input
                 type="password"
                 value={password}
                 onChange={(e)=> setPassword(e.target.value)}
                 placeholder="Password...."
                 required/>
                 <br/>
                 <label>Confirm Password:</label>
                 <input
                 type="password"
                 value={confirmPassword}
                 onChange={(e)=> setConfirmPassword(e.target.value)}
                 placeholder="Confirm Password...."
                 required/>
                 <br/>
                 <button type="submit">REGISTER</button>
            </form>
            <div className="link-container">
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    )


      
};
export default Registeruser;