import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../../Redux/Slices/ProductsSlice.js";

const ProductDetail = () => {
    const {id} = useParams();
    const {products, loading, error} = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const [product, setProduct] = useState({});



    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    useEffect(() => {
        setProduct(products.find(element => element.id === id));
    }, [products]);


    return (
        <div>
            Prod Details
            {
                loading ? <div>Loading</div> : error ? <div>Error</div> : product ? <div>
                    <p>{product.name}</p>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div> : null
            }

        </div>
    );
};

export default ProductDetail;