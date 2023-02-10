import './allimages.css';
import { useContext, useEffect } from "react";
import ImageContext from "../../context/imageContext";
import ShowAll from '../showall/showall';

const AllImages = () => {

    const {getAllImages, getAllsf} = useContext(ImageContext);
    

    useEffect(()=> {
        getAllImages();
    }, [])

    console.log(getAllsf);

    if(getAllsf !== 0){
        
    return(
        <div className="allimg">
            {getAllsf.map(images => (<ShowAll images={images} key={images._id}/>))}
        </div>
    )
    }else{

        return(
            <div className="allimg">
                <h1>Nothing</h1>
            </div>
        )

    }
}

export default AllImages;