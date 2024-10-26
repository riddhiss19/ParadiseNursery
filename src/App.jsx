import React from 'react';
import {
    HashRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import Cart from "./pages/cart";
import ShoppingPage from "./pages/shopping";
import {Provider} from "react-redux";
import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/shopping" element={<ShoppingPage />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;

