import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, Outlet, useParams} from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState([]);
    const {id} = useParams();
    const fetchProducts = async () => {
        try {
            const res = await axios.get("http://localhost:4000/products");
            setProducts(res.data);
        }catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div>



            {
                !id &&     <main className="flex flex-wrap gap-4">
                    {
                        products?.length === 0 ? <p>No Products</p> : products.map(product => (
                            <Link to={`/products/${product.id}`}
                                  className="border border-black p-4 rounded-3xl w-fit flex flex-col items-center justify-center"
                                  key={product.id}>
                                <p>{product.name}</p>
                                <p>{product.price}</p>
                                <p>{product.description}</p>
                            </Link>
                        ))
                    }
                </main>


            }

            <Outlet />
        </div>
    );
};

export default Products;