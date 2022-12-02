import React from 'react'
import Header from '../components/header/header'
import Hero from '../components/hero/hero'
import "./home.css"

import Story from "../components/Story/Story";
import Footer from "../components/Footer/Footer";

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Story></Story>


            <Footer></Footer>
        </>
    )
}
export default Home