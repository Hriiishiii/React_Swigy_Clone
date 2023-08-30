import { useParams } from "react-router-dom";
import { Swiggy_Menu_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { FaRegStar } from "react-icons/fa";
import { IMG_CDN_URL } from "../utils/constants";
import useRestaurant from "../utils/useRestaurantMenu";
import { addItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
    // how to read a dynamic URL
    const {id} = useParams();

    const restroMenuId = useRestaurant(id);

    if (restroMenuId === null) return <Shimmer />

    const {name, cuisines, areaName, avgRating, totalRatingsString} = restroMenuId?.cards[0]?.card?.card?.info;

    const {itemCards} = restroMenuId?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log({itemCards})

    const dispatch = useDispatch();

    const addFoodItem = (item) => {
        dispatch(addItems(item))
    };

    return !restroMenuId ? <Shimmer /> : (
        <div className="container mx-auto px-60">
            <div className="flex justify-between border-b-4 border-dashed my-5">
                <div className="restaurantDetails">
                    <p className="font-bold">{name}</p>
                    <p className="restaurantCuisines">{cuisines.join(' , ')}</p>
                    <p className="mb-3">{areaName}</p>
                </div>
                <button className="">
                    <span className="flex gap-2">
                        <span className="icon-star"><FaRegStar /></span>
                        <span className="avgRatingg">{avgRating}</span>
                    </span>
                    <span className="totalRatingss">{totalRatingsString}</span>
                </button>
            </div>
            <div className="">
                {itemCards.map((item) => (
                    <>
                        <div key={item.card.info.id} className="flex justify-between py-3 border-b-2 border-dashed">
                            <div className="item-name-price-serves">
                                <h3 className="item-name">{item?.card?.info?.name}</h3>
                                <span className="item-price">{'Rs. '}{item?.card?.info?.price/100}</span>
                                <div className="item-serves">Serves 1 | | Serves 1 |</div>
                            </div>
                            <div className="h-20 w-28 justify-between relative">
                                <div><img src={IMG_CDN_URL + item?.card?.info?.imageId} /></div>
                                <div className=""><button className="bg-red-500 hover:bg-blue-400 text-white font-bold rounded-none absolute bottom-0 left-8 w-14" onClick={() => addFoodItem(item)}>Add</button></div>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
};

export default RestaurantMenu;