import Login from "../Pages/Public Pages/Login.jsx";
import Register from "../Pages/Public Pages/Register.jsx";
import {Navigate} from "react-router-dom";
import Home from "../Pages/Private Pages/Home.jsx";
import About from "../Pages/Private Pages/About.jsx";
import ProductsControl from "../Pages/Admin Pages/ProductsControl.jsx";
import Products from "../Pages/Private Pages/Products.jsx";
import UsersControl from "../Pages/Admin Pages/UsersControl.jsx";
import ProductDetail from "../Pages/Private Pages/ProductDetail.jsx";



export const LOGIN_PAGE = '/login'
export const REGISTER_PAGE = '/register'

export const HOME_PAGE = '/'
export const ABOUT_PAGE = '/about'
export const PRODUCTS_PAGE = '/products'

export const PRODUCTS_CONTROL_PAGE = '/productscontrol'
export const USERS_CONTROL_PAGE = '/users'

export const Public_Routes = [
    {path: LOGIN_PAGE, element: <Login />, name: "Login"},
    {path: REGISTER_PAGE, element: <Register />, name: "Register"},
    {path: "*", element: <Navigate to={LOGIN_PAGE} />}
]


export const Private_Routes = [
    {path: HOME_PAGE, element: <Home />, name: "Home" },
    {path: ABOUT_PAGE, element: <About />, name: "About" },
    {
        path: PRODUCTS_PAGE,
        element: <Products />,
        name: "Products",
        children: [
            {
                path: ":id",
                element: <ProductDetail />
            }
        ]
    },
    {path: "*", element: <Navigate to={HOME_PAGE} />}
]

export const Admin_Routes = [
    {path: PRODUCTS_CONTROL_PAGE, element: <ProductsControl />, name: "ProductsControl" },
    {path: USERS_CONTROL_PAGE, element: <UsersControl />, name: "UsersControl" },
    {path: "*", element:<Navigate to={PRODUCTS_CONTROL_PAGE} /> }
]