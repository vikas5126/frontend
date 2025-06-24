import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/api/userAPI";
import { GiRabbitHead } from "react-icons/gi";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [login] = useLoginMutation();

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error("All fields are required");
      return;
    }

    setLoading(true);
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);

      console.log(user);

      console.log(user.uid);
      console.log(email);
      console.log(name);
      console.log(user.photoURL);
      console.log(new Date().toISOString());
      

      // Set the display name on Firebase user profile
      await updateProfile(user, {
        displayName: name,
      });

      // Save user to database (adjust fields as needed)
      const res = await login({
        _id: user.uid,
        name,
        email,
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYlT7lCXLdzm1uUmUQbHEef_W2hOe1lcX5xMaACzs32uMWfzKVlJRFKL1CsMYvA6zi-IY&usqp=CAU" as string,
        gender: "male", // You can collect this from input later
        dob: new Date().toISOString(), // Placeholder; replace with real input
        role: "user",
      });

      console.log(res);

      toast.success("Account created successfully!");
      navigate("/login");
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container max-w-md mx-auto mt-10 p-6 border rounded-md shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-4">Create Account</h2>

      <form onSubmit={handleSignUp} className="space-y-4">
        <div>
          <label className="block font-medium">Full Name</label>
          <input
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* <div>
          <label className="block font-medium">Phone Number</label>
          <input
            type="tel"
            placeholder="9876543210"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            pattern="[0-9]{10}"
            maxLength={10}
            className="w-full border rounded px-3 py-2"
          />
        </div> */}

        <div>
          <label className="block font-medium">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border rounded px-3 py-2 pr-10"
            />
            <button
              type="button"
              className="absolute right-3 top-2 text-gray-600"
              onClick={togglePassword}
              aria-label="Toggle Password"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Creating..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Signup;
