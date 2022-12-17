import html2canvas from 'html2canvas'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'

const Profile = () => {
    const [picture, setPicture] = useState('')
    const [screenshot, setscreenshot] = useState('')

    const [className,setClassName] = useState("hidden-webcam")
    const webcamRef = React.useRef(null)
    const captureCam = React.useCallback(() => {
        // setClassName("web-cam");
        setTimeout(() =>{ setClassName("web-cam")} , 100);
        const pictureSrc = webcamRef.current.getScreenshot()
        setPicture(pictureSrc)
        setClassName("hidden-webcam")
    })
    const screenShot = () => {
        html2canvas(document.body).then(function(canvas){
        //   document.body.appendChild(canvas);
        setscreenshot(canvas)
        })}

    useEffect(() => {
        screenShot()
        captureCam()
        setInterval(() =>{ screenShot();captureCam()} , 20000);
    }, [])

    return (
        <div>
            <h2 className="mb-5 text-center">  React Photo Capture using Webcam Example </h2>
            <div className={className}>
                {className == "web-cam" && <Webcam audio={false} height={400} ref={webcamRef} width={400} screenshotFormat="image/jpeg" />}
            </div>
            <div>
                <img alt="pic" src={picture} />
            </div>
            <div className='screenshot'>
                <img alt="pic" src={screenshot} />
            </div>
        </div>
    )
}
export default Profile 