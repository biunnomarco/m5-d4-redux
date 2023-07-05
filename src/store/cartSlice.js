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
            let quanti = decreseQuantity(state.cartElements, action.payload)
            if (quanti === 0) {
                state.cartElements = state.cartElements.filter(element => element.obj.asin !== action.payload);
            }
            state.cartNumber = calcNumberOfObj(state.cartElements)
            state.cartTotal = calcTot(state.cartElements);
        },
        addToCart(state, action) {
            let quantity = multipleObject(state.cartElements, action.payload.asin)
            if (quantity === 1) {
                const cartElement = {
                    obj: action.payload,
                    quantity: quantity
                };
                state.cartElements.push(cartElement);
            } else {
                increseQuantity(state.cartElements, action.payload.asin)
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



function decreseQuantity(cart, asin) {
    let quantity = 0
    cart.forEach((obj) => {
        if (obj.obj.asin === asin) {
            obj.quantity -= 1
            quantity = obj.quantity
        }
    })
    return quantity
}


function multipleObject(cart, asin) {
    let num = 1;
    cart.forEach((obj) => {
        if (obj.obj.asin === asin) {
            num += 1;
        }
    })
    return num
}

function increseQuantity(cart, asin) {
    cart.forEach((obj) => {
        if (obj.obj.asin === asin) {
            obj.quantity += 1
        }
    })
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