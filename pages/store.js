import Head from "next/head";
import styles from "../styles/Store.module.css";
import SearchBar from "../components/SearchBar";
import React, { useState, useEffect } from "react";

export default function Store() {
    const [productsState, setProductsState] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(productsArray => {
                setProductsState(productsArray);
                setFilteredProducts(productsArray); // Initialize filtered products
            });
    }, []);

    const handleFilter = (searchValue) => {
        const filtered = productsState.filter((product) =>
            product.title.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    return (
        <>
            <div className={styles.fakestore}>
                <h1>Fake Store</h1>
                <p>Welcome to the Fake Store!</p>
                <p>Here you'll find a variety of products from the fakestore API.</p>
                <SearchBar searchItems={productsState} onFilter={handleFilter} />

                <div className={styles.productsGrid}>
                    {filteredProducts.map((product) => (
                        <div key={product.id} className={styles.product}>
                            <img src={product.image} alt={product.title} className={styles.productImage} />
                            <div className={styles.productTitle}>{product.title}</div>
                            <div className={styles.productPrice}>${product.price}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
