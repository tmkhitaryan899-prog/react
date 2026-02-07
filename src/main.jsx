import {createRoot} from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import {ThemeProvider,} from "./Utils/ThemeContext.jsx";
import {Provider} from "react-redux";
import {store} from "./Redux/store";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ThemeProvider>
            <Provider store={store}>
                <App/>
                <ToastContainer/>
            </Provider>
        </ThemeProvider>
    </BrowserRouter>
)
