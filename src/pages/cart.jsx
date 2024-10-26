import React, {useState, useEffect} from 'react';
import logo from "../../public/assets/plant-svgrepo-com.svg";
import {Link} from "react-router-dom";
import './cart.css'

import {useSelector, useDispatch} from "react-redux"
import {increment, decrement, reset, setItems} from "../plantSlice.js";

function Cart() {


    const plantItems = useSelector((state) => state.plant);
    let [cart, setCart] = useState(plantItems.filter(item => item.quantity > 0));
    let [total, setTotal] = useState(0);

    const dispatch = useDispatch();
    useEffect(() => {
        const doStuff = () => {
            const newTotal = getTotalCart();
            setTotal(newTotal);
        }

        doStuff();
    }, [cart])

    const resetCart = (index) =>{
        dispatch(reset(index));
        getTotalCart()
    }
    const getTotalNum = () => {
        let total = 0;
        for (let i =0; i <= plantItems.length - 1; i++) {
            total += plantItems[i].quantity.valueOf();
        }

        console.log(total);
        return total;
    }
    const setCartItems = (index, value) => {
        //
        let plantIndex = plantItems.findIndex(item => item.name === cart[index].name);
        dispatch(setItems({plantIndex, value}));

        setCart( ()=>cart = plantItems.filter(item => item.quantity > 0))
        setTotal(getTotalCart())
        console.log(2)
    }
    const getTotalCart = () => {
        let change = 0;
        setCart( ()=>cart = plantItems.filter(item => item.quantity > 0))
        for (let index = 0; index < cart.length; index++) {
            change += cart[index].quantity.valueOf() * cart[index].cost;
        }
        return change


    }

    const getTotal = (index) => {
        let plantIndex = plantItems.findIndex(item => item.name === cart[index].name);
        if(plantItems[plantIndex].quantity === 0){
            cart.splice(index, 1);
        }
        return plantItems[plantIndex].quantity

    }
    function removeItem(index) {
        let newCart = [];
        for (let i = 0; i < cart.length; i++) {
            if(i !== index) {
                newCart.push(cart[i]);
            }else {
                let plantIndex = plantItems.findIndex(item => item.name === cart[i].name);
                resetCart(plantIndex);
            }
        }

        setCart(cart = newCart);
        console.log("NEW TOTAL: "+getTotalCart());
        setTotal(getTotalCart())

    }
    return(
        <>
            <title>cart</title>
            <header id="shopping-header">
                <Link to="/">
                    <div id="logo">
                        <img id="logo-img" alt="plant logo" src={logo}/>
                        <div id="logo-header">
                            <h2>Paradise Nursery</h2>
                        </div>
                    </div>
                </Link>
                <Link to="/shopping">
                    <h2>Plants</h2>
                </Link>

                <div className="wrapper" style={{position: 'relative', display: 'inline-block', backgroundColor: 'red'}}>
                    <div className="content" style={{backgroundColor: '#022d0e'}}>
                        {getTotalNum()}
                    </div>
                    <svg
                        className="svg-border"
                        xmlns="http://www.w3.org/2000/svg"
                        width="800px"
                        height="800px"
                        viewBox="0 0 24 24"
                        fill="none"
                        transform="translate(0, 3)"
                    >
                        <path
                            d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
                            stroke="#b1ebc2" strokeWidth="1.5"/>
                        <path
                            d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
                            stroke="#b1ebc2" strokeWidth="1.5"/>
                        <path
                            d="M2 3L2.26121 3.09184C3.5628 3.54945 4.2136 3.77826 4.58584 4.32298C4.95808 4.86771 4.95808 5.59126 4.95808 7.03836V9.76C4.95808 12.7016 5.02132 13.6723 5.88772 14.5862C6.75412 15.5 8.14857 15.5 10.9375 15.5H12M16.2404 15.5C17.8014 15.5 18.5819 15.5 19.1336 15.0504C19.6853 14.6008 19.8429 13.8364 20.158 12.3075L20.6578 9.88275C21.0049 8.14369 21.1784 7.27417 20.7345 6.69708C20.2906 6.12 18.7738 6.12 17.0888 6.12H11.0235M4.95808 6.12H7"
                            stroke="#b1ebc2" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                </div>
            </header>
            <main id="cart">

                <h3>Total Cart Amount: ${total}</h3>
                <div className="items">{
                    cart.map((item, index) => (
                        <div className="cart-item">

                            <img src={item.img} alt="a plant"/>
                            <div>
                                <h1>{item.name}</h1>
                                <p>${item.cost}</p>
                                <input min="0" defaultValue={cart[index].quantity}
                                       onChange={(e) => setCartItems(index, e.target.value)} id="numItems"
                                       type="number"/>
                                <p>total: ${getTotal(index) * item.cost}</p>
                                <button onClick={() => removeItem(index)}>Delete</button>

                            </div>

                        </div>
                    ))
                }
                </div>

                <button className="cart-btn">
                    <Link to="/shopping"> Continue Shopping</Link>
                </button>
                <button onClick={() => alert("coming soon")} className="cart-btn">Checkout</button>
            </main>
        </>
    )
}

export default Cart;