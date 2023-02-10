import './seeurl.css';
import { useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import ImageContext from '../../context/imageContext';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const SeeUrl = () => {

    const {imageFile, getLast, last} = useContext(ImageContext);
    const navigate = useNavigate();

    useEffect(() => {
        getLast();
    }, [getLast, last])

    const seeAll = async () => {
      
            navigate("/allImages");
    }

    return(
        <div className='form-container-see'>
             <div>
                <img src={imageFile} alt=""></img>
            </div>
            {last.map(l => <div className='lc' key={l.data[0]._id}>
                    <input id="desc" type="text" name="link" value={l.data[0].image.url}></input>
                    <CopyToClipboard text={l.data[0].image.url}>
                        <button className='copylink'>copy link</button>
                    </CopyToClipboard>
            </div>)}
            <div>
                <button className='allimages' onClick={() => seeAll()}>All images</button>
            </div>
        </div>
    )
   

}

export default SeeUrl;