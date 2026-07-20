import { useEffect, useState } from "react";

const MouseTracking=()=>{
    const [width, setWidth]=useState(0)
    const [height, setHeight]=useState(0)

    useEffect(()=>{
        const handleResize=(e)=>{
            setWidth(e.clientX)
            setHeight(e.clientY)
        }
        window.addEventListener("mousemove",handleResize)

        return ()=> {
            window.removeEventListener("mousemove",handleResize)
        }
    },[])

    return(
        <div>
            <h2>Mouse X: {width}px</h2>
            <h2>Mouse Y: {height}px</h2>
        </div>
    )
}
export default MouseTracking;