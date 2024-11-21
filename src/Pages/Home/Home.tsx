import { Suspense, lazy } from 'react';

const Banner = lazy(() => import("../../Components/Banner/Banner.tsx"));
const BrandFeature = lazy(() => import("../../Components/BrandFeature/BrandFeature.tsx"));
const About = lazy(() => import("../../Components/About/About.tsx"));
const Feature = lazy(() => import("../../Components/Feature/Feature.tsx"));
const HowItWorks = lazy(() => import("../../Components/Home/HowItWorks.tsx"));
const OwnerApp = lazy(() => import("../../Components/Home/OwnerApp.tsx"));
const ReviewSec = lazy(() => import("../../Components/Home/ReviewSec.tsx"));
const ShortTerm = lazy(() => import("../../Components/Home/ShortTerm.tsx"));
const WeList = lazy(() => import("../../Components/Home/WeList.tsx"));
const FAQ = lazy(() => import("../../Components/Home/FAQ.tsx"));

const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <Banner />
        <BrandFeature />
        <About />
        <Feature />
        <HowItWorks />
        <OwnerApp />
        <ReviewSec />
        <ShortTerm />
        <WeList />
        <FAQ />
      </div>
    </Suspense>
  )
}

export default Home
