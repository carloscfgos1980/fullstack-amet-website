import { Carousel } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRegisterNum } from '../redux/gallerySlice';


const ShopCarousel = () => {
    const paintingsData = useSelector(state => state.data.paintingsData);

    const dispatch = useDispatch();

    let registerNumber = Date.now()
    const addRegisterNum = () => {
        dispatch(getRegisterNum(registerNumber));

    }


    return (
        <div className="row">
            <div className="text-center">
                <h3 className="lead text-dark py-3 fw-bold">Click on the painting for details</h3>
                <Carousel fade>
                    {paintingsData.map(painting => {
                        return (
                            <Carousel.Item key={painting.id}>
                                <div className="container-sm">
                                    <div >{painting.reserved && <h3 className='btn btn-dark btn-sm text-warning' >RESERVED</h3>}</div>
                                </div>

                                <Link to={`/art/${painting.title}`}>
                                    <img
                                        onClick={() => addRegisterNum()}
                                        width='40%'
                                        src={painting.img}
                                        alt='slide'
                                    />
                                </Link>
                            </Carousel.Item>
                        )
                    }
                    )}
                </Carousel>
            </div>
        </div>
    );
}

export default ShopCarousel;


