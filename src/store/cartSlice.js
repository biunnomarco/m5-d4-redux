import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartElements: [],
    cartTotal: 0,
    cartNumber: 0,
};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        removeAllSameCart(state, action) {
            state.cartElements = state.cartElements.filter(element => element.obj.asin !== action.payload);
            state.cartNumber = calcNumberOfObj(state.cartElements)
            state.cartTotal = calcTot(state.cartElements);
        },
        removeFromCart(state, action) {
            let quanti = modifyQuantity(state.cartElements, action.payload , '-')
            if (quanti === 0) {
                state.cartElements = state.cartElements.filter(element => element.obj.asin !== action.payload);
            }
            state.cartNumber = calcNumberOfObj(state.cartElements)
            state.cartTotal = calcTot(state.cartElements);
        },
        addToCart(state, action) {
            let quantity = modifyQuantity(state.cartElements, action.payload.asin, '+')
            if (quantity === 1) {
                const cartElement = {
                    obj: action.payload,
                    quantity: quantity
                };
                state.cartElements.push(cartElement);
            }
            state.cartNumber = calcNumberOfObj(state.cartElements)
            state.cartTotal = calcTot(state.cartElements);
        },
        emptyCart(state, action) {
            state.cartElements = [];
            state.cartNumber = 0;
            state.cartTotal = calcTot(state.cartElements);
        }
    }
})

export const { addToCart, emptyCart, removeFromCart, removeAllSameCart } = cartSlice.actions;
export default cartSlice.reducer;


function modifyQuantity(cart, asin, operation) {
   
    let index = isInCart(cart, asin); console.log(index)
    if (index !== -1 ) {
        if (operation === '+') {
            console.log(cart[index])
            cart[index].quantity ++;
        } else {
            if (cart[index].quantity > 1) cart[index].quantity --;
            else return 0
        }
    } else {
        if (operation === '+') {
            return 1
        }
    }
}

function isInCart(cart, asin) {
    return cart.findIndex((element) => element.obj.asin === asin)
}

function calcNumberOfObj(cart) {
    let total = 0;
    cart.forEach((obj) => {
        total += obj.quantity;
    })
    return total
}

function calcTot(cart) {
    let newTotal = 0;
    cart.forEach((obj) => {
        newTotal += (obj.obj.price * obj.quantity)
    })
    return newTotal;
}