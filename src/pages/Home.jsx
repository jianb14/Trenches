import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Home/Hero.jsx'
import BrandValue from '../components/Home/BrandValue.jsx'
import Featured from '../components/Home/Featured.jsx'
import WhyTrenches from '../components/Home/WhyTrenches.jsx'
import ShopByCategory from '../components/Home/ShopByCategory.jsx'
import Banner from '../components/Home/Banner.jsx'
import BestSeller from '../components/Home/BestSeller.jsx'
import NewsletterSignup from '../components/Home/NewsletterSignup.jsx'
import Footer from '../components/Footer.jsx'


export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <BrandValue />
            <Featured />
            <WhyTrenches />
            <ShopByCategory />
            <Banner />
            <BestSeller />
            <NewsletterSignup />
            <Footer />
        </>
    )

}
