import { Background } from "../components/Background.jsx"
import DestinatioPicks from '../components/Destination/DestinationPicks.jsx'
import mobile from '/assets/destination/background-destination-mobile.jpg'
import tablet from '/assets/destination/background-destination-tablet.jpg'
import desktop from '/assets/destination/background-destination-desktop.jpg'
import { motion } from "framer-motion"

const Destination = () => {


    return (
        <motion.div
            initial={{ opacity: 0 }}
            transition={{duration: 0.3}}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <Background mobile={mobile} tablet={tablet} desktop={desktop} />
            <DestinatioPicks/>
        </motion.div>
    )
}

export default Destination