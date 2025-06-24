import { signOut } from "firebase/auth";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaBars, FaHome, FaSearch, FaShoppingBag, FaSignOutAlt, FaTimes, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { User } from "../types/types";

import Whatsapp from "../assets/images/whatsapp.png";
import prabhashreelogo from "../assets/images/logoprabha.jpg";

interface PropsType {
  user: User | null;
}

const Header = ({ user }: PropsType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const logoutHandler = async () => {
    try {
      const providerId = auth.currentUser?.providerData[0]?.providerId;

      await signOut(auth);

      if (providerId === "google.com") {
        toast.success("Logged out from Google account");
      } else if (providerId === "password") {
        toast.success("Logged out from Email account");
      } else {
        toast.success("Logout successful");
      }

      closeMenu();
      navigate("/");
    } catch (error) {
      toast.error("Logout failed");
      console.error("Logout failed", error);
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <Link className="flex gap-2" to="/" onClick={closeMenu}>
          <div>
            <img
              src={prabhashreelogo}
              alt="prabhashreelogo"
              className="w-16 h-12 prabhashreelogo"
            />
          </div>
          <div>Prabhashree<span>Bhog</span></div>
        </Link>
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

        <Link to="https://wa.me/+919835477119" onClick={closeMenu}>
          {menuOpen ? "Whatsapp" : (
            <img
              src={Whatsapp}
              alt="whatsapp"
              className="w-[2rem] h-[2rem]"
              style={{ marginTop: "-0.25rem" }}
            />
          )}
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
          <>
            <Link to="/login" onClick={closeMenu}>
              {menuOpen ? "Login" : (
                <button className="w-28 h-10 text-lg bg-blue-400 rounded-lg text-white">Login</button>
              )}
            </Link>
            <Link to="/signup" onClick={closeMenu}>
              {menuOpen ? "Signup" : (
                <button className="w-28 h-10 text-lg bg-blue-400 rounded-lg text-white">Signup</button>
              )}
            </Link>
          </>
        )}
      </nav>

      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Header;
