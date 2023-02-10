import './dropImage.css';
import { useContext, useState } from 'react';
//import { setUploadImages } from '../../api/requests';
import ImageContext from '../../context/imageContext';
import { useNavigate } from 'react-router-dom';
import Loading from '../../utils/loading';
//import photo from '../../img/photo.png';
import  toast  from 'react-hot-toast';

const DropImage = () => {

    const { uploads, imageFile, setImageFile} = useContext(ImageContext);
    const [image, setImage] = useState([]);
    const [dropImage, setDropImage] = useState(true);
    const navigate = useNavigate();
    const [ begin , setBegin] = useState(false);
    let a = null;
    const changeImage = (e) => {

        e.preventDefault();
        setImage(e.target.files[0]);
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = (e) => {
            setImageFile(e.target.result);
        };
        setDropImage(false);
    };
    
    const chargeImage = async (e) => {

        e.preventDefault();

        if(image.length !== 0){

        setBegin(true);
        const title = e.target.elements.title.value;
        const description = e.target.elements.description.value;
       
        const post = {
            title: title,
            description: description,
            image: image
        }

        await uploads(post);

        setTimeout(() => {
            setBegin(false);
        }, 5000);

        if(post.length !== 0 && begin === false){
           navigate("/upload");
        }

    }else{
        
        a = toast.error("plase drop one image")
        console.log("asease");
        
    }

    }

    const InputFile = () => {
        return(
            <div>
                <input className='file-upload-drag' type="file" accept='image/*' name="image" onChange={(e) =>  changeImage(e)}/>
            </div>
        )
    }

    

    return(
        begin ?
            <Loading/>
        : 
        <div className='form-container'>
        {a}
        <form className='form-file-drag' onSubmit={chargeImage}>
            {dropImage ? <InputFile/>
            :  <div>
                    <img src={imageFile} alt=""></img>
                </div> }
        <div className='title-desc'>
        <label className='form-label' for="title">Title</label>
            <input id="title" className='form-group' type="text" name="title" placeholder='---'></input>
        <label className='form-label' for="description">Description</label>
            <input id="description" className='form-group' type="text" name="description" placeholder='---'></input>
        </div>
        <button id="upload" type="submit">Upload</button>
        </form>
        <div>
        </div>
        </div>
    )

}

export default DropImage;