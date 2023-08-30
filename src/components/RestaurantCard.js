import { IMG_CDN_URL } from "../utils/constants"
import { FaStar } from 'react-icons/fa';
import { useContext } from "react";
import UserContext from "../utils/ContextUser";

const RestaurantCard = ({name, cloudinaryImageId, cuisines, minDeliveryTime, avgRating, costForTwoString}) => {

    const {user} = useContext(UserContext);

    return (

    <div className="card h-auto shadow hover:shadow-neutral-800 m-7 p-7 w-[260px]">
        <img className="rounded-lg" src={IMG_CDN_URL + cloudinaryImageId} />
        <div className="name-contents">
            <div className="font-bold">{name}</div>
            <div className="cuisines">{cuisines.join(', ')}</div>
        </div>
        <div className="flex text-xs justify-between align-center">
            <div className="flex">
                <span className="bg-green-700 rounded-lg text-white w-4"><FaStar /></span>
                <span className="ml-1">{avgRating}</span>
            </div>
            <div>.</div>
            <div className="font-weight">{minDeliveryTime+' '+'min'}</div>
            <div>.</div>
            <div><span>{costForTwoString}</span></div>
        </div>
        {user.name} - {user.role}
    </div>
)};

export default RestaurantCard;