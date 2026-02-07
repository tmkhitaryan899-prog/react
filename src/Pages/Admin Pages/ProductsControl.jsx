import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import Input from "../../Components/UI/Input.jsx";
import {productNameValidation} from "../../Utils/Validations.js";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts, handleAddProduct, handleDeleteProduct} from "../../Redux/Slices/ProductsSlice.js";
import Loader from "../../Components/UI/Loader.jsx";

const ProductsControl = () => {
    const {products, loading, error} = useSelector((state) => state.products);

    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isValid},
    } = useForm({mode: 'all'});


    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);


    return (

        <div>
            <h1>Product Control</h1>
            <form
                className="border border-black p-4 rounded-3xl w-fit flex flex-col items-center justify-center"
                onSubmit={handleSubmit((data)=>{
                   dispatch(handleAddProduct(data))
                    reset()
                })}>
                <Input
                name={"name"}
                register={register}
                type="text"
                validation={productNameValidation}
                error={errors.name && errors.name.message}
                />
                <Input
                    name={"price"}
                    register={register}
                    type="number"
                    validation={productNameValidation}
                    error={errors.price && errors.price.message}
                    />
                <Input
                    name={"description"}
                    register={register}
                    type="text"
                    validation={productNameValidation}
                    error={errors.description && errors.description.message}
                    />
                <button disabled={!isValid} type={"submit"}>Add Product</button>
            </form>


            <main className="flex flex-wrap">
                {
                    loading ? <Loader/> : error ? <p>{error}</p> :
                        products?.length === 0 ? <p>No Products</p> : products.map(product => (
                            <div
                                className="border border-black p-4 rounded-3xl w-fit flex flex-col items-center justify-center"
                                key={product.id}>
                                <p>{product.name}</p>
                                <p>{product.price}</p>
                                <p>{product.description}</p>
                                <button
                                    onClick={() => {
                                        dispatch(handleDeleteProduct(product.id))
                                    }}
                                    className='bg-red-500 text-white'>Delete
                                </button>
                            </div>
                        ))
                }


                {/*<iframe*/}
                {/*    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11074.838780872564!2d44.49944805984519!3d40.175538490310736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abcfa28499691%3A0x2bde14d127166c74!2sRepublic%20Square!5e0!3m2!1sen!2sam!4v1770462843063!5m2!1sen!2sam"*/}
                {/*    style={{*/}
                {/*        width: '600px',*/}
                {/*        height: '450px',*/}
                {/*        border: "0",*/}
                {/*    }}*/}

                {/*    // width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy"*/}
                {/*    referrerPolicy="no-referrer-when-downgrade"></iframe>*/}

                {/*<iframe width="1031" height="580" src="https://www.youtube.com/embed/2R0DFFmxT_I"*/}
                {/*        title="Как задеплоить React-приложение на GitHub Pages" frameBorder="0"*/}
                {/*        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
                {/*        referrerPolicy="strict-origin-when-cross-origin"*/}
                {/*        allowFullScreen></iframe>*/}
            </main>
        </div>
    );
};

export default ProductsControl;