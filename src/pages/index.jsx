import React from 'react'
import Header from '../components/header/header'
import Hero from '../components/hero/hero'
import "./home.css"
import Story from '../components/Story/Story'
import Footer from '../components/Footer/Footer';
import OurTeam from '../components/ourteam/OurTeam';
import PodLover from '../components/podlover/PodLover';

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Story />
            <OurTeam />
            <OurTeam isAdvisor={true} />
            <PodLover />
            <Footer />
        </>
    )
}
export default Home