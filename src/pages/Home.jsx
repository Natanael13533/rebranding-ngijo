import * as React from 'react';

import Divider from '@mui/material/Divider';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import Testimonials from '../components/Testimonials';
import Features from '../components/Features'
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <Hero />
            <Divider />
            <Features />
            <Divider />
            <Testimonials />
            <Divider />
            <Highlights />
            <Divider />
            <FAQ />
            <Footer />
        </>
    )
}