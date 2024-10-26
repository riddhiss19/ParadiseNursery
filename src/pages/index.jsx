import React from 'react';
import {Link} from "react-router-dom";
import './index.css'
function LandingPage() {
    return(

        <div id='landingPage'>
            <title>Paradise Nursery</title>
            <div id="main-container">
                <div id="title">
                    <h1>Welcome To Paradise Nursery</h1>
                    <hr/>
                    <p>Where Green Meets Serenity</p>
                    <button type="button" disabled>
                        <Link to="/shopping">Get Started</Link>
                    </button>
                </div>
                <div id="info">
                    <p>At Paradise Nursery, we are passionate about bringing nature closer to you. Our mission is to
                        provide a wide range of high-quality plants that not only enhance the beauty of your
                        surroundings but also contribute to a healthier and more sustainable lifestyle. From
                        air-purifying plants to aromatic fragant ones, we have something for every plant enthusiast. 
                        Our team of experts is dedicated to ensuring that each plant meets our strict standards of
                        quality and care. Whether you're a seasoned gardener or just starting your green journey, we're
                        here to support you every step of the way. Feel free to explore our collection, ask questions
                        and let us help you find the perfect plant for your home or officeJoin us in our mission to create a greener, healthier world. Visit Paradise Nursery today and
                        experience the beauty of nature right at your doorstep</p>
                </div>
            </div>
        </div>


    )
}

export default LandingPage;