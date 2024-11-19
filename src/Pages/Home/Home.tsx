
import Banner from '../../Components/Banner/Banner.tsx'
import BrandFeature from '../../Components/BrandFeature/BrandFeature.tsx'
import About from '../../Components/About/About.tsx'
import Feature from '../../Components/Feature/Feature.tsx'
import HowItWorks from '../../Components/Home/HowItWorks.tsx'
import OwnerApp from '../../Components/Home/OwnerApp.tsx'
import ReviewSec from '../../Components/Home/ReviewSec.tsx'
import ShortTerm from '../../Components/Home/ShortTerm.tsx'
import WeList from '../../Components/Home/WeList.tsx'
import FAQ from '../../Components/Home/FAQ.tsx'

const Home = () => {
  return (
    <div>
      <Banner/>
      <BrandFeature/>
      <About/>
      <Feature/>
      <HowItWorks/>
      <OwnerApp/>
      <ReviewSec/>
      <ShortTerm/>
      <WeList/>
      <FAQ/>
    </div>
  )
}

export default Home
