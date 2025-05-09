import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';
import { useLoginMutation } from '../redux/api/userAPI';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';


const Login = () => {
    const [gender, setGender] = useState("");
    const [date, setDate] = useState("");

    const [login] = useLoginMutation();
    const navigate = useNavigate();

    const loginHandler = async() => {
        try{
            const provider = new GoogleAuthProvider();
            const {user} = await signInWithPopup(auth, provider)

            const res = await login({
                _id : user.uid,
                name : user.displayName as string,
                email : user.email as string,
                photo  : user.photoURL as string,
                gender ,
                dob : date,
                role : "user",
            })

            console.log(res);

            if("data" in res){
                toast.success("Login Successful");
                navigate("/");
            }
            else{
                const error = res.error as FetchBaseQueryError;
                if(error.status === 400){
                    toast.error("User Already Exists");
                }
                else{
                    toast.error("Login Failed");
                }
            }
        }
        catch(err){
            toast.error("Login Failed");
            console.log(err);
        }
    }
  return (
    <div className='login'>
        <main>
            <h1 className='heading'>Login</h1>

            <div>
                <label>Gender</label>
                <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                </select>
            </div>

            <div>
                <label>Date of Birth</label>        
                <input 
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}/>
            </div>

            <div><p>Already Signed In Once</p>
            <button onClick={loginHandler} className='login-button'>
                <FcGoogle /> <span>Sign in with Google</span>
            </button>

            </div>
        </main>
    </div>
  );
};

export default Login;