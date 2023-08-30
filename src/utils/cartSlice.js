import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        items : []
    },
    reducers : {
        addItems: (state, action) => {
            // const itemIndex = state.items.findIndex(item => item.card.info.id === action.payload.id);
            // console.log(itemIndex)

            // if(itemIndex >= 0) {
            //     state.items.card.info.inStock += 1;
            // } else {
            //     state.items.push(action.payload)
            // }

            // const itemInCart = state.items.findIndex((item) => {
            //     return (
            //         console.log({item})
            //     )
            // });
            // console.log(itemInCart)

            const itemInCart = state.items.findIndex((item) => item?.info?.id === action?.payload?.id);
            console.log(itemInCart)
            if (itemInCart >= 0) {
                state.items[itemInCart].card.info.inStock++;
            } else {
                state.items.push({...action.payload, inStock : 1});
            }

            // state.items.push(action.payload)
        },
        removeItems: (state, action) => {

            // state.items.pop(action.payload)

            const index = state.items.findIndex(item => item.card.info.id === action.payload.id);
            console.log(index)

            /*
                The issue is the use of an arrow function with no curly braces as the reducer, because that acts as an implicit return statement. 
                So, you're both mutating state.token, and returning the result of the assignment.
                    Adding the void operator in front of the assignment
                    Wrapping the assignment in curly braces to make it a function body
            */

            return void(state.items.splice(index, 1));
        },
        clearCart: (state, action) => {
            state.items = [];
        },
        increaseCartQuantity: (state, action) => {
            const itemIndex = state.items.findIndex((item) => item.card.info.id === action.payload.id);
            state.items[itemIndex].card.info.inStock += 1;
        },
        decreaseCartQuantity: (state, action) => {
            const itemIndex = state.items.findIndex((item) => item.card.info.id === action.payload.id);
            if(state.items[itemIndex].card.info.inStock > 1) {
                state.items[itemIndex].card.info.inStock -= 1;
            }
            else if (state.items[itemIndex].card.info.inStock === 1) {
                return void(state.items.splice(itemIndex, 1))
            }
        }
    }
})

export const {addItems, removeItems, clearCart, increaseCartQuantity, decreaseCartQuantity} = cartSlice.actions;

export default cartSlice.reducer;