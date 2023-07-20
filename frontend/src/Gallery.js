import { motion } from 'framer-motion';
import CarouselGallery from './CarouselGallery';

const Gallery = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
            <div className="text-center">
                <h2 className="display-6 text-dark">Paintings</h2>
            </div>
            <div>
                <div className="row justify-content-center align-items-center py-5">
                    <div className="col-text-center col-sm-4">
                        <img className="pb-2 px-3" width='110%' src="./images/work/work4_gallery.jpeg" alt="Amet Portfolio" />
                    </div>
                    <div className="col-sm-6 text-end pe-3">
                        <h2 className="display-5">paintings  paintings paintings paintings paintings paintings paintings paintings paintings paintings paintings paintings paintings paintings paintings paintings paintings paintings paintings paintings paintings paintings paintings paintings paintings </h2>
                    </div>
                </div>
            </div>
            <CarouselGallery />
        </motion.div>
    );
}

export default Gallery;