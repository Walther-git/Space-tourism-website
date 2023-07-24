import { Background } from "../components/Background.jsx"
import mobile from '/assets/crew/background-crew-mobile.jpg'
import tablet from '/assets/crew/background-crew-tablet.jpg'
import desktop from '/assets/crew/background-crew-desktop.jpg'
import { motion } from "framer-motion"

const Crew = () => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            transition={{duration: 0.3}}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <Background mobile={mobile} tablet={tablet} desktop={desktop} />
            <h1 style={{ position: 'absolute', zIndex: '1', top: '0px', color: '#fff' }}>Crew</h1>
        </motion.div>
    )
}

export default Crew