import { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo_cropped.jpg";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux"
import ReverseGeocoding from "./ReverseGeocoding";
import CartIcon from "../assets/img/cart-icon.png"
// Title component to display the logo
export const Title = () => {
  return (
    <div className="logo-img">
      <Link to="/">
      <img alt="logo" src={Logo} id="logoImg" /> 
      </Link>
    </div>
  );
};

// Header component
const Header = () => {
  // Accessing user context
  const user = useContext(UserContext);
  const cartItem = useSelector((store)=>store.cart.items)
  const userName=useSelector((store)=>store.auth.username)
  
  console.log(cartItem)
  return (
      <div className="header flex justify-between items-center bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] px-10 py-5 fixed top-0 w-full ">
        {/* Rendering the Title component */}
        <div className="header-left"> 
          <Title />
          <ReverseGeocoding />
        </div>
        {/* Navigation links */}
        <ol className="headerLinks flex justify-between m-0">
          <li className="text-lg p-2.5">
            <Link to="/" className="no-underline transition-colors duration-300 hover:text-[#921919]">Home</Link>
          </li>
          <li className="text-lg p-2.5">
            <Link to="/about" className="no-underline transition-colors duration-300 hover:text-[#921919]">About Us</Link>
          </li>
          <li className="text-lg p-2.5">
            <Link to="/contact" className="no-underline transition-colors duration-300 hover:text-[#921919]">Contact Us</Link>
          </li>
          
          <li className="text-lg p-2.5">
            <Link to="/instamart" className="no-underline transition-colors duration-300 hover:text-[#921919]">Instamart</Link>
          </li>
          {/* Displaying user context value */}
          <li className="text-lg p-2.5">
            <Link to="/cart" className="no-underline transition-colors duration-300 hover:text-[#921919]">
              <div className="header-cart">
                <img src={CartIcon} className="cart-icon"></img>
              </div>
            </Link>
          </li>
          {/* <li className="text-lg p-2.5 transition-colors duration-300 hover:text-[#921919]">{user}</li> */}
          <li className="text-lg p-2.5">
            <Link to="/login" className="login-btn">
            
              {userName?userName:"Login"}</Link>
          </li>
          
        </ol>
      </div>
  );
};

export default Header;
