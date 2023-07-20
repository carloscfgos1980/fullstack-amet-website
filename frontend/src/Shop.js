import React from 'react'
import { motion } from 'framer-motion';
import ShopCarousel from './components/ShopCarousel';

const Shop = () => {
    return (
        <motion.div className="container-fluid bg-warning py-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
            <ShopCarousel />

        </motion.div>
    );
}

export default Shop