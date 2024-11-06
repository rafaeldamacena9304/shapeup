import { useEffect, useState } from 'react'

import * as S from './styles'

import banner1 from '../../../assets/images/heroBanner1.png'
import banner2 from '../../../assets/images/heroBanner2.png'
import banner3 from '../../../assets/images/heroBanner3.png'

export const Banner = () => {

    //Background images to array
    const banners = [banner1, banner2, banner3];
    //State for change index with interval of time
    const [currentBanner, setCurrentBanner] = useState(0);

    const [fade, setFade] = useState(true);
    const [zoom, setZoom] = useState(true)

    //Create a change in setCurrentBanner periodically interlinked with banners.lenght ( array of images )
    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setZoom(false);
            
            setTimeout(() => {
                setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length );
                setFade(true);
                setZoom(true);
            }, 500)

        }, 3000);

        //Stop carrousel when component is not renderized
        return () => clearInterval(interval);

    }, [banners.length])

    return(
        <S.Banner src={banners[currentBanner]} fade={fade} zoom={zoom}/>
    )
}