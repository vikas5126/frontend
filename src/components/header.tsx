import { MdAccountCircle } from "react-icons/md";
import { FaBars, FaTimes, FaHome, FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { User } from "../types/types";
import { sign } from "crypto";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";

interface PropsType {
  user: User | null;
}

const Header = ({user}: PropsType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const logoutHandler = async () => {
    // Add your logout logic here 
    try{
      await signOut(auth);
      toast.success("Logout successful");
      <Navigate to="/" />;
      closeMenu();
    }
    catch (error) {
      toast.error("Logout failed");
      console.error("Logout failed", error);
    }

  }

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" onClick={closeMenu}>Prabhashree<span>Bhog</span></Link>
      </div>

      <nav className={menuOpen ? "nav-links active" : "nav-links"}>
        <Link to="/" onClick={closeMenu}>
          {menuOpen ? "Home" : <FaHome />}
        </Link>
        <Link to="/search" onClick={closeMenu}>
          {menuOpen ? "Search" : <FaSearch />}
        </Link>
        <Link to="/cart" onClick={closeMenu}>
          {menuOpen ? "Cart" : <FaShoppingBag />}
        </Link>

        {user?._id ? (
           <>
           <button onClick={() => setIsOpen((prev) => !prev)}>
             <FaUser className="text-[1.3rem]" />
           </button>
           <dialog open={isOpen}>
             <div>
               {user.role === "admin" && (
                 <Link onClick={() => setIsOpen(false)} to="/admin/dashboard">
                   Admin
                 </Link>
               )}
 
               <Link onClick={() => setIsOpen(false)} to="/order">
                 Orders
               </Link>
               <button onClick={logoutHandler}>
                 <FaSignOutAlt />
               </button>
             </div>
           </dialog>
         </>
        ) : (
          <Link to="/login" onClick={closeMenu}>
            {menuOpen ? "Login" : <button className="w-28 h-10 text-lg bg-blue-400 rounded-lg text-white">Login</button>}
          </Link>
        )}
      </nav>

      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Header;
