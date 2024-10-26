import { createSlice } from "@reduxjs/toolkit";
import lotus from "/assets/lotus.jpg";
import lily from "/assets/peace-lily.png";
import aloe from "/assets/aloe-vera.jpg";
import evergreen from "/assets/Chinese-Evergreen.jpg";
import dracaena from "/assets/Dracaena.jpg";
import spider from "/assets/Spider-Plant.jpg";


export const plantSlice =  createSlice( {
    name: "plants",
    initialState: [
        {
            img: lotus,
            name: "Lotus",
            cost: 18,
            quantity: 0,
            summary: "Graceful and serene, perfect for indoor tranquility.",
            type: "Air Purifying Plant",
        },
        {
            img: lily ,
            name: "Peace lily",
            cost: 28,
            quantity: 0,
            summary: "Air-purifying beauty that thrives in low light",
            type: "Air Purifying Plant",
        },
        {
            img: aloe,
            name: "Aloe Vera ",
            cost: 28,
            quantity: 0,
            summary: "Healing and decorative, a natural skin soother.",
            type: "Air Purifying Plant",
        },
        {
            img: evergreen,
            name: "Chinese Evergreen",
            cost: 49,
            quantity: 0,
            summary: "Low-Light champion with vibrant leaves.",
            type: "Low-Light",
        },
        {
            img: dracaena,
            name: "Dracaena",
            cost: 49,
            quantity: 0,
            summary: "Elegant and hardy, ideal for shaded spaces.",
            type: "Low-Light",
        },
        {
            img: spider,
            name: "Spider Plant",
            cost: 49,
            quantity: 0,
            summary: "Resilient and easy-care, great for beginners.",
            type: "Low-Light",
        },
       
       
    ],
    reducers : {
           increment: (state, action) => {
               const item = state[action.payload];
               if (item) {
                   item.quantity = item.quantity + 1;
               }
           },
            decrement: (state, action) => {
               const item = state[action.payload];
               if(item && item.quantity > 0) {
                   item.quantity = item.quantity - 1;
               }
            },
            reset: (state, action) => {
               const item = state[action.payload];
               if(item && item.quantity > 0) {
                   item.quantity = 0;
               }
            },
        setItems: (state, action) => {
            const item = state[action.payload.plantIndex];
            if (item) {
                item.quantity = Number(action.payload.value.valueOf());
            }
        },

    },
});

export const { setItems, increment, decrement, reset } = plantSlice.actions;
export default plantSlice.reducer;