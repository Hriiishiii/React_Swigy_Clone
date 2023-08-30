import { Swiggy_API_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { ShimmerPostList } from "react-shimmer-effects";
// Test
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/ContextUser";

const Body = () => {
    const [searchText, setSearchText] = useState('');
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const {user, setUser} = useContext(UserContext);

    useEffect(() => {
        // API Call
        getRestaurants()
    }, []);

    async function getRestaurants () {
        const data = await fetch(Swiggy_API_URL);
        const apiData = await data.json();
        setAllRestaurants(apiData?.data?.cards[2]?.card.card.gridElements.infoWithStyle.restaurants)
        setFilteredRestaurants(apiData?.data?.cards[2]?.card.card.gridElements.infoWithStyle.restaurants)
    }

    const isOnline = useOnline();

    if (!isOnline) {
        return <h1>🕸️You are offline, please check your internet connection</h1>
    }

    return allRestaurants.length === 0 ? <Shimmer /> : (
        <>
            <div className="">
                <div className="my-3">
                    <input type="text" className="py-2 px-4 bg-white border shadow-sm border-slate-300 focus:outline-none focus:border-sky-50 focus:ring-sky-500 rounded-md" placeholder="search" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded ml-4" onClick={() => {
                        const data = filterData(searchText, allRestaurants);
                        setFilteredRestaurants(data);
                    }}>search</button>
                    <input value={user.name} onChange = {
                        e => setUser({
                            name : e.target.value,
                            email : 'hrishi@hma.com'
                        })
                    } />
                </div>
                <div className="flex justify-start flex-wrap h-[auto]"> {
                    filteredRestaurants.map((restaurant) => {
                        return <li className="list-none" key={restaurant.info.id}><Link to={'/restaurants/' + restaurant.info.id}><RestaurantCard  {...restaurant.info} /></Link></li>
                    })
                }
                </div>
            </div>
        </>
    )
}

export default Body;
