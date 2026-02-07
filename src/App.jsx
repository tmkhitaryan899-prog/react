import React from 'react';
import Pages from "./Pages/Pages.jsx";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";

const App = () => {
    return (
        <div>
            <Header />
           <Pages />
            <Footer />
        </div>
    );
};

export default App;