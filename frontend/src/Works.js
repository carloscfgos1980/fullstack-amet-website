import { Link } from "react-router-dom";
import { motion } from 'framer-motion';


const Works = () => {
    return (
        <motion.div className="Container-fluid py-3 bg-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
            <div className="row justify-content-center align-items-center">
                <div>
                    <div className="row justify-content-center align-items-center py-5">
                        <div className="col-sm-4">
                            <div className="imagen-overlay">
                                <Link to="/paintings">
                                    <img width='100%' src="./images/work/work1_painting.png" alt="Amet notebook" />
                                    <div className="text-overlay">
                                        <p>click to watch Amet's paintings</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-7 text-end">
                            <h2 className="display-5">paintings  paintings paintings paintings paintings paintings paintings paintings paintings paintings paintings paintings paintings paintings paintings paintings paintings paintings paintings paintings paintings paintings paintings paintings paintings </h2>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row justify-content-center align-items-center py-5">
                        <div className="col-sm-7 text-end">
                            <h2 className="display-5">Videoart Videoart Videoart Videoart Videoart Videoart Videoart Videoart Videoart Videoart Videoart Videoart Videoart Videoart Videoart Videoart Videoart Videoart Videoart Videoart </h2>
                        </div>
                        <div className="col-sm-4">
                            <div className="imagen-overlay">
                                <Link to="/video-art">
                                    <img width='100%' src="./images/work/work2_videoart.jpeg" alt="Amet notebook" />
                                    <div className="text-overlay">
                                        <p>click to watch Amet's video Arts</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row justify-content-center align-items-center py-5">
                        <div className="col-sm-4">
                            <div className="imagen-overlay">
                                <Link to="/performance">
                                    <img width='100%' src="./images/work/work3_performance.jpeg" alt="Amet notebook" />
                                    <div className="text-overlay">
                                        <p>click to watch Amet's performance</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-7 text-end">
                            <h2 className="display-5">Performance Performance Performance Performance Performance Performance Performance Performance Performance Performance Performance Performance Performance Performance Performance Performance Performance Performance Performance Performance Performance </h2>
                        </div>

                    </div>
                </div>
                <div>
                    <div className="row justify-content-center align-items-center py-5">
                        <div className="col-sm-7 text-end">
                            <h2 className="display-5">Gallery Gallery Gallery Gallery Gallery Gallery Gallery Gallery Gallery Gallery Gallery Gallery Gallery Gallery Gallery Gallery Gallery Gallery Gallery Gallery Gallery Gallery Gallery </h2>
                        </div>
                        <div className="col-sm-4">
                            <div className="imagen-overlay">
                                <Link to="/gallery">
                                    <img width='100%' src="./images/work/work4_gallery.jpeg" alt="Amet notebook" />
                                    <div className="text-overlay">
                                        <p>click to watc Amet's gallery</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Works;