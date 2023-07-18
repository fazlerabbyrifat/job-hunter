/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import News from '../News/News';
import Footer from '../../shared/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <News></News>
            <Footer></Footer>
        </div>
    );
};

export default Home;