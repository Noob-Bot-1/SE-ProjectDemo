import axios from 'axios';
import React,{useContext, useState} from 'react';
import { useHistory } from 'react-router';
import AuthContext from '../Context/AuthContext';

function LoginStudent() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const {getLoggedIn} = useContext(AuthContext);
    const history = useHistory();

    async function loginStudent(e) {
        e.preventDefault();

        try {
            const loginStudentData = {
                email,
                password,
            };

            await axios.post("http://localhost:5000/auth/loginStudent", loginStudentData);
            await getLoggedIn();
            history.push("/");

        }catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <h1>Login to a Student account</h1>
            <form
                onSubmit = {loginStudent}
            >
                <input 
                    type='email' 
                    placeholder = 'Email' 
                    onChange = {(e) => setEmail(e.target.value)}
                    value= {email}
                />
                <input 
                    type='password'    
                    placeholder = 'Password'
                    onChange = {(e) => setPassword(e.target.value)}
                    value= {password} 
                />
                <button type = 'submit'>Login</button>
            </form>
        </div>
    )
}

export default LoginStudent
