import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addReservedPaintAsync, paintReservedPatchAsync, switchFalse } from "../redux/gallerySlice";
import AlertAdded from "./AlertAdded";


const Painting = () => {

    const alreadyAdded = useSelector(state => state.data.alreadyAdded);
    const registerNumber = useSelector(state => state.data.registerNum);
    console.log("registed number", registerNumber)
    const paintingsData = useSelector(state => state.data.paintingsData);

    const dispatch = useDispatch();
    const { title } = useParams();


    const addPaintingCart = (piece) => {
        console.log("piece", piece)

        const paintingDetails = {
            id: piece.id,
            title: piece.title,
            tech: piece.tech,
            size: piece.size,
            price: piece.price,
            img: piece.img,
            reserved: !piece.reserved,
            cart: !piece.cart,
            registerNum: registerNumber,
        }
        //dispatch(addPainting(paintingDetails));
        dispatch(paintReservedPatchAsync(paintingDetails));
        dispatch(addReservedPaintAsync(paintingDetails))
    }
    const backFalse = () => {
        dispatch(switchFalse());
    }

    return (
        <div className="px-5 py-2" style={{ backgroundColor: '#F5EFF6' }}>
            {alreadyAdded && <AlertAdded />}
            <Link to='/shop' >
                <Button onClick={backFalse} className="btn btn-end" variant="warning">back</Button>{' '}
            </Link>
            <div className="text-center">
                <h2 className="text-dark">Paintings</h2>
                {paintingsData.filter(painting => painting.title === title)
                    .map(painting => {
                        const imagen = painting.img;
                        const resersed = painting.reserved;
                        console.log("reserved", painting.reserved)
                        console.log("cart", painting.cart)
                        return (
                            <div key={painting.id} className='container-md my-5'>
                                <div className="row justify-content-center align-items-end">
                                    <div className="col-md-8 text-end">
                                        <img src={require(`${imagen}`)}
                                            width="50%"
                                            alt={painting.title} />
                                    </div>
                                    <div className="col-md-4 text-start" >
                                        <p>Title: {painting.title}</p>
                                        <p>Tecnique: {painting.tech}</p>
                                        <p>Size: {painting.size}</p>
                                        <p>Price: {painting.price}</p>
                                    </div>
                                </div>
                                {resersed ?
                                    <Button
                                        className="my-3"
                                        variant="danger">
                                        reserved
                                    </Button>
                                    :
                                    <Button
                                        onClick={() => addPaintingCart(painting)}
                                        className="my-3"
                                        variant="success">
                                        Add to the Cart
                                    </Button>
                                }
                            </div>
                        )
                    })}

            </div>

        </div>
    );
}

export default Painting;