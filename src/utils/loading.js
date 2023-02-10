import './loading.css';
import { useEffect, useState } from "react"
import toast from 'react-hot-toast';

export const Loading = () => {

    const [ fill, setFill] = useState(0);
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        if(fill < 100){
            setTimeout(() => setFill(prev => prev += 2), 20);
        }
        if(fill === 100){
            setShowToast(true);
            toast.success("Upload Succesfully")
        }
    }, [fill]);

    return(
        <div className='bar'>
            {showToast ? <p>Sucess</p> : <p>Uploading...</p>}
            <div className="progressbar">
                <div style={{
                    height: "100%",
                    width: `${fill}%`,
                    backgroundColor: "#7424ec",
                    transition:"width 0.4s"
                }}></div>
                    <span className='progress'>{fill}%</span>
            </div>
        </div>
    )
}



export default Loading;