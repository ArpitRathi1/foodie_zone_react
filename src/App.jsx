import { useEffect } from "react"
import AppStore from "./components/AppStore"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

    useEffect(() => {
      AOS.init({
        offset: 100,
        duration: 500,
        easing: "ease-in-sine",
        delay: 100,
      });
      AOS.refresh();
    }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <NavBar></NavBar>
      <Hero></Hero>
      <Services></Services>
      <AppStore></AppStore>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  )
}

export default App
