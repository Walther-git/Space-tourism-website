import "./DestinationPicks.css";
import { useState, useEffect } from "react";
import { initialTabs as tabs } from "./DataDestination.jsx";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <motion.div
      className="window"
      initial={{ opacity: 0, y: '-30px' }}
      transition={{ duration: 0.4 }}
      animate={{ opacity: 1, y: '0px' }}
    >
      <div className='flex-row'>
        <span className='number font-barlow font-style line-height'>01</span>
        <p className='first-title font-barlow font-style line-height'>PICK YOUR DESTINATION</p>
      </div>

      <nav className="navigation">
        <ul className="ul-class font-barlow font-style line-height">
          {tabs.map((item) => (
            <li
              key={item.name}
              className={`li-class ${item === selectedTab ? "selected" : ""} font-barlow font-style line-height`}
              onClick={() => setSelectedTab(item)}
            >
              {`${item.name}`}
              {item === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>

      <main className="destionation-main">
        <AnimatePresence mode='wait'>
          <motion.div
            className='flex-colum'
            key={selectedTab ? selectedTab.name : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -15, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <img className='planet' src={selectedTab.images.webp} />

            <div className="box-text">
              <h1 className='title-planet'>
                {selectedTab.name}
              </h1>

              <p className='description'>
                {selectedTab.description}
              </p>

              <div className='box-avg-est'>
                <div className='box-avg'>
                  <p className='distance font-barlow font-style line-height'>AVG. DISTANCE</p>
                  <motion.p className='distance-number font-style line-height'>
                    {selectedTab.distance}
                  </motion.p>
                </div>

                <div className='box-est'>
                  <p className='distance font-barlow font-style line-height'>EST. TRAVEL TIME</p>
                  <p className='distance-number font-style line-height'>
                    {selectedTab.travel}
                  </p>
                </div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </main>
    </motion.div>
  );
}
