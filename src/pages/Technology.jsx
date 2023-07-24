import { Background } from "../components/Background.jsx"
import mobile from '/assets/technology/background-technology-mobile.jpg'
import tablet from '/assets/technology/background-technology-tablet.jpg'
import desktop from '/assets/technology/background-technology-desktop.jpg'
import { motion } from "framer-motion"

const Technology = () => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            transition={{duration: 0.3}}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <Background mobile={mobile} tablet={tablet} desktop={desktop} />
            <h1 style={{ position: 'absolute', zIndex: '1', top: '0px', color: '#fff' }}>Technology</h1>
        </motion.div>
    )
}

export default Technology