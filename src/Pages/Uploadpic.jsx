import React, { useState } from 'react';
import { MdArrowBackIos } from "react-icons/md";
import Image from '../Images/Login.png';
import { LuUpload } from "react-icons/lu";

const Uploadpic = () => {
    const [clicked, setClicked] = useState([false, false, false]); // An array to handle multiple clicks
    const [images, setImages] = useState([null, null, null]); // An array to store up to three images

    const handleImageUpload = (e, index) => {
        let file = e.target.files[0];
        if (file) {
            const updatedImages = [...images];
            updatedImages[index] = file;
            setImages(updatedImages);

            const updatedClicked = [...clicked];
            updatedClicked[index] = true;
            setClicked(updatedClicked);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(images);
    };

    return (
        <div className='container-fluid vh-100 d-flex align-items-center g-2'>
            <div className='row w-100'>
                <img className='img-fluid'
                    style={{ height: '100vh', width: '50vw', objectFit: 'cover' }}
                    src={Image}
                    alt="Background"
                />
            </div>

            <div className='col-md-6 d-flex flex-column align-items-center me-5 gap-3 mb-5'>
                <div className='top'>
                    <button className='upperbuttons'>
                        <MdArrowBackIos style={{ marginBottom: '5px' }} />Back
                    </button>
                    <button>Skip</button>
                </div>
                {/* {Upper buttons div ends here} */}
                <div>
                    <h3><b>Upload your pictures!</b></h3>
                    <b>(Select up to 3)</b>
                    <p>choose your pictures or videos</p>
                </div>
                <div className='d-flex justify-content-center align-items-center flex-column gap-5 main'>
                    <div id='backgroundContainer'>
                        {clicked[0] && images[0] ? (
                            <div className='mainContainer'>
                                <img src={URL.createObjectURL(images[0])} alt="" className='img-preview' />
                            </div>
                        ) : (
                            <div className='mainContainer'>
                                <LuUpload size={50} />
                                <label htmlFor="upload1" className='btn btn-info imagebutton'>Upload image</label>
                                <input type="file" accept="image/*" hidden id="upload1" onChange={(e) => handleImageUpload(e, 0)} />
                            </div>
                        )}

                        <div className='secondContainer'>
                            <div className='smallBoxtab'>
                                {clicked[1] && images[1] ? (
                                    <img src={URL.createObjectURL(images[1])} alt="" className='img-preview' />
                                ) : (
                                    <>
                                        <LuUpload size={50} />
                                        <label htmlFor="upload2" className='btn btn-info imagebutton 'style={{fontSize:'10px'}} >Upload image</label>
                                        <input type="file" accept="image/*" hidden id="upload2" onChange={(e) => handleImageUpload(e, 1)} />
                                    </>
                                )}
                            </div>
                            <div className='smallBoxtab'>
                                {clicked[2] && images[2] ? (
                                    <img src={URL.createObjectURL(images[2])} alt="" className='img-preview' />
                                ) : (
                                    <>
                                        <LuUpload size={50} />
                                        <label htmlFor="upload3" className='btn btn-info  imagebutton' style={{fontSize:'10px'}}>Upload image</label>
                                        <input type="file" accept="image/*" hidden id="upload3" onChange={(e) => handleImageUpload(e, 2)} />
                                    </>
                                )}
                            </div>
                           
                        </div>
                       
                    </div>
                    <div>
                    <button className='btn btn-info imagebutton' style={{ width: '400px' }} onClick={handleSubmit}>Next</button>
                </div>
                </div>
               
            </div>
        </div>
    );
}

export default Uploadpic;