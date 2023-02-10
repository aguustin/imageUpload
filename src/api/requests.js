import axios from "axios";

export const getAlls = () => axios.get('/all');

export const setUploadImages = async (post) => {

    const form = new FormData();

    for(let key in post){
    
    form.append(key, post[key]);

    }
    return await axios.post('/', form , {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }); 
}

export const getLastPic = async () => axios.get('/upload');

export const deleteOneRequest = async (id) => axios.delete('/all/' + id);




