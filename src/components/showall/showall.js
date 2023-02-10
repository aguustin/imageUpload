import { useContext } from "react";
import ImageContext from "../../context/imageContext";


const ShowAll = ({images}) => {

    const {deleteOne} = useContext(ImageContext);

    return(
        <div>
        <div className='imgs'>
        <button className="delete" onClick={() => deleteOne(images._id)}>Delete</button>
            <a href={images.image.url}>
            <img src={images.image.url} alt=""></img>
        </a>
        <p>{images.title}</p>
        </div>
        </div>
    )
}

export default ShowAll;