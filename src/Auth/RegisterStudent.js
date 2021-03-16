import axios from 'axios';
import React,{useState} from 'react'


function RegisterStudent() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [passwordVerify,setPasswordVerify] = useState("");

    async function registerStudent(e) {
        e.preventDefault();

        try {
            const registerStudentData = {
                email,
                password,
                passwordVerify,
            };

            await axios.post("http://localhost:5000/auth/registerStudent", registerStudentData);

        }catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <h1>Register a new Student account</h1>
            <form
                onSubmit = {registerStudent}
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
                <input 
                    type='password' 
                    placeholder = 'Verify your Password' 
                    onChange = {(e) => setPasswordVerify(e.target.value)}
                    value= {passwordVerify}
                />
                <button type = 'submit'>Register</button>
            </form>
        </div>
    )
}

export default RegisterStudent;
