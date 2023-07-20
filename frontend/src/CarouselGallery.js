import Carousel from 'react-bootstrap/Carousel';

function CarouselGallery() {
    return (
        <div className="row">
            <div className='text-center p-5 bg-danger-subtle'>
                <div className='container-sm'>
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                                className="w-80"
                                src="./images/work/amet_action painting.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="w-50"
                                src="./images/work/amet_actionpainting_2016.jpg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="w-60"
                                src="./images/work/amet_actionpainting_2017.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="w-60"
                                src="./images/work/amet_actionpainting.jpg"
                                alt="Forth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="w-60"
                                src="./images/work/amet_actionpainting2.jpg"
                                alt="Fith slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>

            </div>
        </div>


    );
}

export default CarouselGallery;