import axios from 'axios';
import React,{useContext, useState} from 'react';
import { useHistory } from 'react-router';
import AuthContext from '../Context/AuthContext';


function RegisterStudent() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [passwordVerify,setPasswordVerify] = useState("");
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [semester,setSemester] = useState("");
    const [branch,setBranch] = useState("");

    const {getLoggedIn} = useContext(AuthContext);
    const history = useHistory();

    async function registerStudent(e) {
        e.preventDefault();

        try {
            const registerStudentData = {
                email,
                password,
                passwordVerify,
                firstName,
                lastName,
                semester,
                branch,
            };

            await axios.post("http://localhost:5000/auth/registerStudent", registerStudentData);
            await getLoggedIn();
            history.push("/");

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
                <input 
                    type ='String'
                    placeholder = 'First Name'
                    onChange = {(e) => setFirstName(e.target.value)}
                    value = {firstName}
                />
                <input 
                    type ='String'
                    placeholder = 'Last Name'
                    onChange = {(e) => setLastName(e.target.value)}
                    value = {lastName}
                />
                <input 
                    type ='String'
                    placeholder = 'Semester'
                    onChange = {(e) => setSemester(e.target.value)}
                    value = {semester}
                />
                <input 
                    type ='String'
                    placeholder = 'Branch'
                    onChange = {(e) => setBranch(e.target.value)}
                    value = {branch}
                />

                <button type = 'submit'>Register</button>
            </form>
        </div>
    )
}

export default RegisterStudent;
