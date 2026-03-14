import React, { Suspense, lazy } from 'react';
import Hero from '../components/Hero';

// Lazy load below-the-fold components
const VideoSection = lazy(() => import('../components/VideoSection'));
const About = lazy(() => import('../components/About'));
const Services = lazy(() => import('../components/Services'));
const Gallery = lazy(() => import('../components/Gallery'));
const Articles = lazy(() => import('../components/Articles'));
const Booking = lazy(() => import('../components/Booking'));
const ServiceMarquee = lazy(() => import('../components/ServiceMarquee'));

const HomePage = () => (
    <>
        <Hero />
        <Suspense fallback={<div className="py-20 text-center text-gray-400">Loading components...</div>}>
            <VideoSection />
            <About />
            <ServiceMarquee />
            <Services />
            <Gallery />
            <Booking />
            <Articles />
        </Suspense>
    </>
);

export default HomePage;
