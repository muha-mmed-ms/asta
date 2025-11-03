import Header from './components/Header'
import Hero from './components/Hero'
import WhoWeAre from './components/WhoWeAre'
import Features from './components/Features'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Cta from './components/Cta'
import PropertyShowcase from './components/PropertyShowcase'
import RoomGallery from './components/RoomGallery'
import Contact from './components/Contact'
import GetInTouch from './components/GetInTouch'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-full bg-primary text-white">
      {/* <Header /> */}
      <main>
        <Hero />
        <WhoWeAre />
        <Features />
        <About />
        <Testimonials />
        <Cta />
        <PropertyShowcase />
        <RoomGallery />
        <Contact />
        <GetInTouch />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default App
