import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userlogin } from "../redux/action";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const loggingin = (e) => {
        e.preventDefault();
        setLoading(true);
        dispatch(userlogin({ email, password }))
            .then((res) => {
                if (res.data.success) {
                    setSuccess(res.data.message);
                    setLoading(false);
                } else {
                    setError(res.data.message);
                    setLoading(false);
                }
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    };

    return (
        <div>
            <form onSubmit={loggingin}>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email...."
                    required
                />
                <br />
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password...."
                    required
                />
                <br />
                <button type="submit">LOGIN</button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}
            <div className="link-container">
                <p>Don't have an account? <Link to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;
