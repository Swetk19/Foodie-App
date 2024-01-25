
import {LOGO_URL} from "../utils/constants";
import {useState, useContext} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
    const[btnNameReact, setBtnNameReact] = useState("Login");
    
    const onlineStatus = useOnlineStatus();
    
    const  cartItems = useSelector((store) => store.cart.items);


    return (
    <div className="flex justify-between bg-gray-100 shadow-lg m-2">
    <div className="logo-container">
    <img className="w-56 h-25" src= {LOGO_URL}/>
    </div>
    <div className="flex items-center">
        <ul className="flex p-4 m-4">
            <li className="px-4 font-bold">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
            <li className="px-4 font-bold">
            <Link to="/">Home</Link>
            </li>
            <li className="px-4 font-bold"> 
            <Link to="/about">About Us</Link>
            </li>
            <li className="px-4 font-bold">
           <Link to="/contact">Contact Us  </Link>
            </li>
            <li className="px-4 font-bold text-xl">
            <Link to="/cart">🛒({cartItems.length} items)</Link>
            </li>
            <button 
            className="font-bold"
             onClick={()=> {
               btnNameReact === "Login" 
               ?setBtnNameReact("Logout")
               : setBtnNameReact("Login"); 
            }}
            >
            {btnNameReact}
            </button>
        </ul>
    </div>
    </div>
    );
};

export default Header;