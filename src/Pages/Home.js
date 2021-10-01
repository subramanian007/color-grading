import React from 'react';
import Gallery from '../Components/Gallery';
import { motion } from 'framer-motion';
import { homeVariants } from '../Components/Animate';

function Home() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={homeVariants}
      transition={{ duration: 2 }}
    >
      <Gallery />
    </motion.div>
  );
}

export default Home;
