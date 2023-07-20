import React from 'react'
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import ShopCarousel from './components/ShopCarousel';

const Shop = () => {
    const paintingsData = useSelector(state => state.data.paintingsData);
    // console.log("paintingsData", paintingsData)

    return (
        <motion.div className="container-fluid bg-warning py-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
            {paintingsData.map(paint => (
                <ShopCarousel id={paint.id} title={paint.title} reserved={paint.reserved} img={paint.img} />
            ))}
        </motion.div>
    );
}

export default Shop