import { Background } from "../components/Background.jsx"
import { HomePresentation } from "../components/Home/HomePresentation.jsx"
import mobile from '/assets/home/background-home-mobile.jpg'
import tablet from '/assets/home/background-home-tablet.jpg'
import desktop from '/assets/home/background-home-desktop.jpg'
import { motion } from "framer-motion"

const Home = () => {

    return (
        <motion.div
            className="contenedor"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Background mobile={mobile} tablet={tablet} desktop={desktop}/>
            <HomePresentation />
            
        </motion.div>
    )
}

export default Home