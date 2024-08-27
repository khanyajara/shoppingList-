import React, {useState, useEffect} from "react";
import { json, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userlogin } from "../redux/action";
 
const login=()=> {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);


    const loggingin =(e)=>{
        e.preventDefault();
        setLoading(true);
        dispatch(userlogin({email, password}))
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



    }

}