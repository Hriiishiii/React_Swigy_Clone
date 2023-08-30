import { useSelector } from "react-redux";
import FoodItem from "./FoodItems";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice"


const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();

    const clearCartItems = (cartItems) => {
        dispatch(clearCart(cartItems))
    }

    return (
        <>
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded mt-4" onClick={() => clearCartItems(cartItems)}>Clear Cart</button>
            <div className="flex flex-wrap flex-col">
                {cartItems?.map((item) => <li className="list-none" key={item?.card?.info?.id}><FoodItem {...item?.card?.info} /></li>)}
            </div>
        </>
    )
}

export default Cart;