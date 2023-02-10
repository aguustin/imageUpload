import { createContext, useState } from "react";

import { getAlls, setUploadImages, getLastPic, deleteOneRequest } from "../api/requests";


const ImageContext = createContext();

export const ImageContextProvider = ({children}) => {
    
    const [posts, setPosts] = useState([]);
    const [getAllsf, setGetAll] = useState([]);
    const [last, setLast] = useState([]);
    const [imageFile, setImageFile] = useState(null);

    const getAllImages = async () => {
        const res = await getAlls();
        setGetAll(res.data);
    }

    const uploads = async (post) => {
        const res = await setUploadImages(post);
        setPosts([...posts, res.data]);
        console.log(res);
    }

    const getLast = async () => {
        const res = await getLastPic();
        setLast([res]); 
    }

    const deleteOne = async (id) => {
        await deleteOneRequest(id);
        setGetAll(getAllsf.filter((getSf) => getSf._id !== id));
        console.log(id);
    }

 
    return(
        <ImageContext.Provider value={{ posts, getAllsf, last, imageFile, setImageFile, getAllImages, uploads, getLast, deleteOne }}>{children}</ImageContext.Provider>
    )
}

export default ImageContext;