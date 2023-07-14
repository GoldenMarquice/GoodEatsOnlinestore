import {useState} from 'react';
import React from "react";
import "./admin.css";

function Admin() {
    //products state function
    const [product, setProduct] = useState({});// object
    const [allProducts, setAllProducts] = useState([]);// list of objects

    //coupon state function
    const [coupon, setCoupon] = useState({});
    const [allCoupons, setAllCoupons] = useState([]);

    function handleText(e){
        const value = e.target.value;
        const name = e.target.name

        // Copy. Modify Copy, Set Copy
        // spread operator JS
        let copy = {...product};
        copy[name] = value;
        setProduct(copy);
    }

    function saveProduct(){
        console.log(product);
        let copy = [...allProducts];
        copy.push(product);
        setAllProducts(copy);
        
    }

    function handleCoupon(e){
        const value = e.target.value;
        const name = e.target.name;

        let copy = {...coupon};
        copy[name] = value;
        setCoupon(copy);
    }

    function saveCoupon(){
        console.log(coupon)
        let copy = [...allCoupons];
        copy.push(coupon);
        setAllCoupons(copy);
    }

    return (
        <div className="admin page">
            <br />

            <h1>Good Eating</h1>
            <h2>Store Administration</h2>
            <br />
            <div className="parent">
                <section className="sec-prods">

                    <div className="form">
                    <h3>Products</h3>
                    
                            <div className="mt-3">
                                <label className="form-label"> Title: </label>
                                <input onChange={handleText} name="title" className="form-control" type="text" placeholder="Food Name" />{" "}
                                </div>

                                <div className="mt-3">
                                <label className="form-label">Image: </label>
                                <input onChange={handleText} name="image" className="form-control" type="text" placeholder=" Image" />
                                </div>

                            <div className="mt-3">
                                <label className="form-label">Price: </label>
                                <input onChange={handleText} name="price" className="form-control" type="number" placeholder=" Entree Cost" />
                                </div>

                            <div className="mt-3">
                                <label className="form-label" htmlFor="adminCategory"> Category:  </label> 
                                <input onChange={handleText} name="category" className="form-control" type="text" placeholder="Entree Category" />
                                </div>
                            <br />
                            <div className="mt-4 ">
                            <button className="btn btn-dark" onClick={saveProduct}>
                                Save Product
                            </button>
                            </div>
                    </div>

                    <h3 className='mt-4'> You have {allProducts.length} Products </h3>

                    <ul>
                    
                    <h3>{allProducts.map(prod => <h5> <li>{prod.title} - ${prod.price} </li></h5>)} </h3>
                    </ul>

                </section>

                <section className="sec-coupons">
                <div className="form">
                    <h3>Coupon Codes</h3>
                    
                                <div className="mt-3">
                                <label className="form-label"> Code: </label>
                                <input onChange={handleCoupon} name="code" className="form-control" type="text" placeholder="Coupon Name" />{" "}
                                </div>

                                <div className="mt-3">
                                <label className="form-label"> Discount: </label>
                                <input onChange={handleCoupon} name="dicount" className="form-control" type="number" placeholder="Coupon Name" />{" "}
                                </div>
                                    <br />
                                    <div className="mt-4">
                        <button className="btn btn-dark" onClick={saveCoupon}>
                            Save Discount
                        </button>
                        </div>
                </div>

                <h3 className="mt-4"> You have {allCoupons.length} Coupons </h3>
                <ul>
                <h3> {allCoupons.map(coup => <h5> <li>{coup.code} - ${coup.discount} </li></h5>)} </h3>
                </ul>

                </section>
            </div>
        </div>
    );
}

export default Admin;


/**
 * Create the form
 * Create a function to handle the change on controls
 * Created a state variable and build an object from the change function
 * Console log the object on the click of the save button
 * 
 * create an array to store the object and added the object from the save function
 * print the length of the array
 * Render info about the objects
 */