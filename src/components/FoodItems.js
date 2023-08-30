import { IMG_CDN_URL } from "../utils/constants";
import { AiOutlineClose } from "react-icons/ai";
import { removeItems } from "../utils/cartSlice";
import { increaseCartQuantity } from "../utils/cartSlice"
import { decreaseCartQuantity } from "../utils/cartSlice"
import { useDispatch } from "react-redux";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";


const FoodItem = ({name, imageId, inStock, price, id}) => {

    const dispatch = useDispatch();

    const removeCartItems = ({name, imageId, price, inStock, id}) => {
        dispatch(removeItems({name, imageId, price, inStock, id}))
    }

    const stockAvailable = Object.values({inStock});

    const increaseQuantity = ({inStock, id}) => {
        dispatch(increaseCartQuantity({inStock, id}))
    }

    const decreaseQuantity = ({inStock, id}) => {
        dispatch(decreaseCartQuantity({inStock, id}))
    }

    return (
        <>
            <div className="relative h-auto shadow hover:shadow-neutral-800 m-7 p-7">
                <div className="flex justify-between items-center">
                    <div>
                        <div><img className="rounded-lg w-52" src={IMG_CDN_URL + imageId} /></div>
                        <div className="font-bold">{name}</div>
                    </div>
                    <div className="flex border-2 p-2 min-w-[92px]">
                        <div><button className="" onClick={() => decreaseQuantity({inStock, id})}> <AiOutlineMinusCircle /> </button></div>
                        <div className="mx-3"><button>{inStock}</button></div>
                        <div><button className="font-bold" onClick={() => increaseQuantity({inStock, id})}> <AiOutlinePlusCircle /> </button></div>
                    </div>
                    <div className="min-w-[100px]">
                        <div>Rs. {(price/100)*(Number(stockAvailable))}</div>
                    </div>
                </div>
                <div><button className="absolute right-0 top-0 m-2" onClick={() => removeCartItems({name, imageId, price, inStock, id})}><AiOutlineClose /></button></div>
            </div>
        </>
    )
};

export default FoodItem;