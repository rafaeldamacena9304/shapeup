import { useEffect, useState } from 'react'

import * as S from './styles'

import banner1 from '../../../assets/images/heroBanner1.png'
import banner2 from '../../../assets/images/heroBanner2.png'
import banner3 from '../../../assets/images/heroBanner3.png'

export const Banner = () => {

    //Background images to array
    const banners = [banner1, banner2, banner3];
    //State for current background image
    const [currentBanner, setCurrentBanner] = useState(0);

    //In load, set interval for each image to change their 
    //index in the array of images, with 3s of interval
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length ) 
        }, 3000);

        //Stop carrousel when component is not renderized
        return () => clearInterval(interval);
    }, [banners.length])

    return(
        <S.Banner src={banners[currentBanner]}/>
    )
}