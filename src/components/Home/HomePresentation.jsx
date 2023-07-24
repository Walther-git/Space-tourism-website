import React from 'react'
import './HomePresentation.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export const HomePresentation = () => {
    return (
        <div className="big-container">
            <motion.section
                className='container'
                initial={{ opacity: 0, y: '-30px' }}
                transition={{ duration: 0.4 }}
                animate={{ opacity: 1, y: '0px' }}
            >
                <div className='container-text'
                >
                    <p className="frish-title">
                        SO, YOU WANT TO TRAVEL TO
                    </p>

                    <h1 className="space">SPACE</h1>

                    <p className="third-text">
                        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience! Explore
                    </p>
                </div>

                <Link to='/destination'>
                    <motion.button
                        className='explore'
                        whileHover={{ scale: [null, 1.3, 1.1] }}
                        transition={{ duration: 0.05 }}
                        whileTap={{ scale: 0.9 }} >EXPLORE
                    </motion.button>
                </Link>
            </motion.section>
        </div >
    )
}
