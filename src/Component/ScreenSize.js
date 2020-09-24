import { useState,useEffect } from 'react'

export default function ScreenSize() {
    const [data,setData]=useState();
    useEffect(() => {
        updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);
        
        // returned function will be called on component unmount 
        return () => {
            window.removeEventListener('resize', updateWindowDimensions);
        }
        }, [])
        function updateWindowDimensions() {
        setData({ width: window.innerWidth, height: window.innerHeight });
        }

    return(
        data
    )
}