import { useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import "../styles/login.scss"; // adjust path as needed;

import { useLoginMutation } from "../redux/api/userAPI";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [login] = useLoginMutation();

  const navigate = useNavigate();

  const togglePassword = () => setShowPassword((prev) => !prev);

  const signInWithGoogle = async() => {
        try{
            const provider = new GoogleAuthProvider();
            const {user} = await signInWithPopup(auth, provider)

            const res = await login({
                _id : user.uid,
                name : user.displayName as string,
                email : user.email as string,
                photo  : user.photoURL as string,
                gender: "Male" as string ,
                dob : new Date().toISOString(),
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

  const signInWithEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const {user} = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      toast.success("Logged in successfully!");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Google Sign-In failed");
    }
  };

  return (
    <div className="login-container">
      <h2>Sign In</h2>

      <button onClick={signInWithGoogle} className="google-button">
        <FcGoogle size={24} />
        <span>Sign in with Google</span>
      </button>

      <form onSubmit={signInWithEmail}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </div>

        <div className="password-field">
          <label>Password</label>
          <div className="input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={togglePassword}
              className="eye-button"
              aria-label="Toggle Password"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        <button type="submit">Sign in with Email</button>
      </form>
    </div>
  );
};

export default Login;
