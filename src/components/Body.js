import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useInternetCheck from "../utils/useInternetCheck";
import SearchIcon from "../assets/img/search-icon.png";
import RestaurantCard from "./RestaurantCard"; // Importing the RestaurantCard component
import UserContext from "../utils/UserContext";
import useCurrentLocation from "../utils/useCurrentLocation";
import { ImgAPI } from '../Constants';
// Importing the higher-order component for applying discounts
import { showDiscount } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useDispatch } from 'react-redux';
import { clearCart } from '../utils/cartSlice';
import useFetchCoords from "../utils/useFetchCoords";
const Body = () => {
  const user = useContext(UserContext);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [Corousel, setCorousel] = useState([]);
  const [restaurantFilter, setRestaurantFilter] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [LocationText, setLocationText] = useState("");
  const [latitude, longitude] = useCurrentLocation(); // Fetch user's location
  const a = useFetchCoords("london")
  console.log("a",a);
  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      requestRestaurants(); // Fetch restaurants when latitude and longitude are available
      console.log(Corousel);
    }
  }, [latitude, longitude]);

  async function requestRestaurants() {
    try {
      const response = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&page_type=DESKTOP_WEB_LISTING`);
      const json = await response.json();
      const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setCorousel(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
      
      setAllRestaurants(restaurants);
      setRestaurantFilter(restaurants);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  }

  function filterData(searchText, restaurantFilter) {
    return restaurantFilter.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText));
  }

  const handleSearch = () => {
    const searchData = filterData(searchText, allRestaurants);
    setRestaurantFilter(searchData);
  };

  if (!allRestaurants) {
    return null;
  }

  const isOnline = useInternetCheck();
  if (!isOnline) {
    return <h1>🔴 Internet is not available. Please connect to the internet.</h1>;
  }

  // Higher-order component to apply discounts
  const UseDiscount = showDiscount(RestaurantCard);
  const dispatch = useDispatch();
    const handleClearCart = () => {
        console.log("clear");
        dispatch(clearCart());
    };
  return (
    <div className="body">
      <div>
        <label>Location</label>
        <input 
        type="Text"
        value={LocationText}
        onChange={(e)=>setLocationText(e.target.value)}
        className="location-text"></input>
        <button>Add</button>
      </div>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          value={searchText}
          placeholder="Search"
          onChange={(e) => setSearchText(e.target.value.toLowerCase())}
        />
        <button className="search-btn" onClick={handleSearch}>
          <img src={SearchIcon} className="search-btn-icon" alt="Search" />
        </button>
      </div>
      <div className="top-corousel">
        {Corousel.map((corouselImg)=>{
          return(
            <img src={ImgAPI+corouselImg.imageId} className="corouse-img"></img>
          )
        })}
      </div>
      <div className="card-body  gap-5 m-2.5">
        {restaurantFilter.length === 0 ? (
          <Shimmer /> 
        ) : (
          restaurantFilter.map((restaurantObject) => (
            <Link to={`/menu/${restaurantObject.info.id}`} key={restaurantObject.info.id} onClick={handleClearCart}>
              {/* Applying discount using the higher-order component */}
              <UseDiscount {...restaurantObject.info} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;