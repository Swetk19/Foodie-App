import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

    //whenever state variable update, react triggers reconcialation cycle
    console.log("Body Rendered", listOfRestaurants);
    

    useEffect(() => {
        fetchData();
    },[]);
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.849650963072294&lng=77.68001552671194&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) 
    return(
    <h1>
    Look like you're offline!! Please check our internet connection
    </h1>
    );
       
    return listOfRestaurants.length === 0 ? (
    <Shimmer/>
    ) :(
        <div className="body">
            <div className="filter flex">
            <div className="search m-4 p-4">
                <input type="text" className="border border-solid border-black"
                    value={searchText}
                    onChange = {(e) => setSearchText(e.target.value)     
                    }
                />
                <button className="px-3 py-1 bg-green-300 m-2 rounded-lg"
                onClick={() => {
            const filteredRestaurant = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredRestaurant);
            console.log(filteredRestaurant)
             }}
                >
                Search
                </button>
                </div>
            <div className="search m-4 p-4 flex items-center">
            <button className="px-4 py-2 bg-gray-100 rounded-lg"
             onClick={()=> {
                const filteredList = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4
                );
                setListOfRestaurant(filteredList);
            }}
            >
                Top Rated Restaurant
            </button>
            </div>
            </div>
           
            <div className="flex flex-wrap">
                {filteredRestaurant.map((restaurant)=> (
                <Link
                key={restaurant?.info?.id}
                to={"/restaurant/" + restaurant?.info?.id}  
              >
              {
                restaurant.info.promoted ? (
                <RestaurantCardPromoted resData={restaurant}/>
                ) : (
                <RestaurantCard resData={restaurant} />
                )}
                
              </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;